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
    volumes: null
  };

  searchChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  // Makes a GET request to Google Books API with the search query and then stores it in state
  fetchVolumes = event => {
    // Checks for blank query
    if (!this.state.searchQuery) {
      event.preventDefault();
      return;
    } else {
      this.setState({ isFetching: true });
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${
          this.state.searchQuery
        }&maxResults=20&key=${GBOOKS_API_KEY}`,
        {
          method: "GET",
          mode: "cors"
        }
      )
        .then(res =>
          res.json().then(data => {
            this.setState({
              volumes: data.items
            });
            this.setState({ isFetching: false });
          })
        )
        .catch(err => console.log(err));
      event.preventDefault();
    }
  };

  getContent = () => {
    const { isFetching, volumes } = this.state;

    let content;
    if (isFetching) {
      content = (
        <main>
          <video
            className={styles.altContent}
            src={require("./assets/spinner.webm")}
            type="video/webm"
            autoPlay
            loop
          />
        </main>
      );
    } else if (!volumes && !isFetching) {
      content = (
        <main>
          <h1 className={styles.altContent}>Search for books</h1>
        </main>
      );
    } else {
      content = <ResultViewer volumes={volumes} />;
    }
    return content;
  };

  render() {
    return (
      <div className={styles.App}>
        <Header
          searchChange={this.searchChange}
          fetchVolumes={this.fetchVolumes}
        />
        {this.getContent()}
        <Footer />
      </div>
    );
  }
}

export default App;
