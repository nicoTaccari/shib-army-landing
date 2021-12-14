import React, { Fragment } from "react";
import "./App.css";
import Roadmap from "./components/roadmap/index";
import Header from "./components/header/index";
import Gallery from "./components/gallery";
import About from "./components/about";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Roadmap />
      <Gallery />
    </>
  );
};

export default App;
