import React, { Fragment } from "react";
import "./App.css";
import Roadmap from './components/roadmap/index'

const App = () => {
  return (
    <Fragment>
      <div className="panel roadmap">
        <Roadmap/>
      </div>
    </Fragment>
  );
}

export default App;
