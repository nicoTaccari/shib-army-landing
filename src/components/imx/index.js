import React from "react";
import BackButton from "../terms/backButton";
import SecondaryHeader from "../terms/secondaryHeader";
import "../terms/styles.css";
import { imxContent } from "./imxContent";
import parse from "html-react-parser";
import "./styles.css";
import EmbeddedVideo from "../embedded-video";

export default function Imx() {
  return (
    <>
      <SecondaryHeader />
      <div className="terms-container">
        <BackButton />
        {imxContent.map((elem) => {
          return (
            <>
              {elem.title && <h1 className="terms-title">{elem.title}</h1>}
              <p>{elem.content && parse(elem.content)}</p>
            </>
          );
        })}
        <EmbeddedVideo />
      </div>
    </>
  );
}
