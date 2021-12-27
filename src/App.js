import React, { Suspense } from "react";

import "./App.css";
import Roadmap from "./components/roadmap/index";
import Header from "./components/header/index";
import Gallery from "./components/gallery";
import About from "./components/about";
import Footer from "./components/footer";
import Team from "./components/team";
import Profiles from "./components/profiles";
import HeaderRow from "./components/header-row";

const App = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <HeaderRow />
      <Header />
      <About />
      <Roadmap />
      <Gallery />
      <Team />
      <Profiles />
      <Footer />
    </Suspense>
  );
};

export default App;
