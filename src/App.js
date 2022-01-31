import React, { Suspense } from "react";

import "./App.css";
import Spinner from "./components/spinner";

const HeaderRow = React.lazy(() => import("./components/header-row"));
const Roadmap = React.lazy(() => import("./components/roadmap"));
const Header = React.lazy(() => import("./components/header"));
const Gallery = React.lazy(() => import("./components/gallery"));
const About = React.lazy(() => import("./components/about"));
const Footer = React.lazy(() => import("./components/footer"));
const Team = React.lazy(() => import("./components/team"));
const Profiles = React.lazy(() => import("./components/profiles"));

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
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