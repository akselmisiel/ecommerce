import React, { useState } from "react";
import EditorsPick from "../components/EditorsPick";
import Slide from "../components/Carousel";
import Products from "../components/Products";

function Example(args) {
  return (
    <>
      <Slide />
      <EditorsPick />
      <Products />
    </>
  );
}

export default Example;
