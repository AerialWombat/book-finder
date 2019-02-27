import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
