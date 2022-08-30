import React from "react";
import ColorButton from "./components/Color";

export default function PickColor() {
  const listOfColors = [
    "green",
    "red",
    "blue",
    "silver",
    "yellow",
    "cyan",
    "purple",
    "pink",
  ];

  return (
    <>
      <ColorButton colorList={listOfColors} />
    </>
  );
}
