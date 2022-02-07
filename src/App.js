import React, { Suspense } from "react";
import moment from "moment";

import "./App.css";
import Spinner from "./components/spinner";
import whitelist from "./whitelist.json";

const HeaderRow = React.lazy(() => import("./components/header-row"));
const Roadmap = React.lazy(() => import("./components/roadmap"));
const Header = React.lazy(() => import("./components/header"));
// const Gallery = React.lazy(() => import("./components/gallery"));
const About = React.lazy(() => import("./components/about"));
const Footer = React.lazy(() => import("./components/footer"));
const Team = React.lazy(() => import("./components/team"));
const Profiles = React.lazy(() => import("./components/profiles"));
// const HeaderButton = React.lazy(() => import("./components/header-button"));
const Minter = React.lazy(() => import("./components/minter"));

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <HeaderRow />
      <Header />
      <Minter
        contractAddress={process.env.REACT_APP_NFT_CONTRACT_ADDRESS.toLowerCase()}
        presaleDate={moment("2022-02-09T16:00:00+00:00")}
        saleDate={moment("2022-02-10T04:00:00+00:00")}
        totalTokens={500}
        mintPrice={0.08216}
        presaleWhitelist={whitelist}
        presaleMaxMintAmount={2}
        tokenShuffleRounds={5}
        salesAddress={process.env.REACT_APP_NFT_SALES_ADDRESS.toLowerCase()}
        royaltiesAddress={process.env.REACT_APP_NFT_ROYALTIES_ADDRESS.toLowerCase()}
      />
      <About />
      <Roadmap />

      <Team />
      <Profiles />
      <Footer />
    </Suspense>
  );
};

export default App;
