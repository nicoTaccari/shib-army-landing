import React from "react";

import "./App.css";
import Roadmap from "./components/roadmap/index";
import Header from "./components/header/index";
import Gallery from "./components/gallery";
import About from "./components/about";
import Footer from "./components/footer";
import SectionX from "./components/sectionX/sectionX";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Roadmap />
      <Gallery />
      <SectionX/>
      <Footer />
    </>
  );
};

export default App;
