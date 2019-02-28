import React, { Component } from "react";
import Header from "./components/Header";
import ResultViewer from "./components/ResultViewer";
import Footer from "./components/Footer";
import styles from "./App.module.scss";

const GBOOKS_API_KEY = `${process.env.REACT_APP_GBOOKS_API_KEY}`;

class App extends Component {
  state = {
    books: []
  };

  fetchVolumes = () => {
    fetch();
  };

  render() {
    return (
      <div className={styles.App}>
        <Header />
        <ResultViewer />
        <Footer />
      </div>
    );
  }
}

export default App;
