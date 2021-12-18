import React from "react";

import "./App.css";
import Roadmap from "./components/roadmap/index";
import Header from "./components/header/index";
import Gallery from "./components/gallery";
import About from "./components/about";
import Footer from "./components/footer";
import Team from "./components/team";
import Profiles from "./components/profiles";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Roadmap />
      {/* <Gallery /> */}
      <Team />
      <Profiles />
      <Footer />
    </>
  );
};

export default App;
