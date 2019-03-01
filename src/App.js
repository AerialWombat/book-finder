import React, { Component } from "react";
import Header from "./components/Header";
import ResultViewer from "./components/ResultViewer";
import Footer from "./components/Footer";
import styles from "./App.module.scss";

const GBOOKS_API_KEY = `${process.env.REACT_APP_GBOOKS_API_KEY}`;

class App extends Component {
  state = {
    isFetching: false,
    searchQuery: null,
    volumes: []
  };

  searchChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  // Makes a GET request to Google Books API with the search query and then stores it in state
  fetchVolumes = event => {
    this.setState({ isFetching: true });
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${
        this.state.searchQuery
      }&maxResults=20&key=${GBOOKS_API_KEY}`,
      {
        method: "GET",
        mode: "cors"
      }
    ).then(res =>
      res.json().then(data =>
        this.setState({
          volumes: data.items
        })
      )
    );
    event.preventDefault();
  };

  render() {
    const { volumes } = this.state;
    return (
      <div className={styles.App}>
        <Header
          searchChange={this.searchChange}
          fetchVolumes={this.fetchVolumes}
        />
        <ResultViewer volumes={volumes} />
        <Footer />
      </div>
    );
  }
}

export default App;
