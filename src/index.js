import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Terms from "./components/terms";
import ScrollToTop from "./components/wrappers/scroll-to-top";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="terms" element={<Terms />} />
        </Routes>
      </ScrollToTop>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);