import React from "react";
import Footer from "../footer";
import "./styles.css";
import { SiGithub } from "react-icons/si";
import SecondaryHeader from "./secondaryHeader";
import { content } from "./termsContent";
import BackButton from "./backButton";
import parse from "html-react-parser";

export default function Terms() {
  return (
    <>
      <SecondaryHeader />
      <div className="terms-container">
        <BackButton />
        <h1 className="terms-title">Terms & Conditions</h1>
        <p>Last Updated : September 10, 2021</p>
        {content.map((elem) => {
          return (
            <>
              {elem.title && <h1 className="terms-title">{elem.title}</h1>}
              <p>{parse(elem.content)}</p>
            </>
          );
        })}
        <h1 className="terms-title">Credits</h1>
        <p>
          Website designed and developed by Nico{" "}
          <a
            href="https://github.com/nicoTaccari"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub size={"1.5em"} className="github" />
          </a>{" "}
          and Arsh.
        </p>
      </div>
      <Footer />
    </>
  );
}
