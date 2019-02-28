import React, { Component } from "react";
import Header from "./components/Header";
import ResultViewer from "./components/ResultViewer";
import Footer from "./components/Footer";
import styles from "./App.module.scss";

class App extends Component {
  state = {
    books: []
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
