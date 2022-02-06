import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

export default function BackButton() {
  return (
    <Link className="back" to="/">
      <IoMdArrowBack className="arrow" />
      Home
    </Link>
  );
}
