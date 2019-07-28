import React, { Component } from "react";
import "./App.css";
import ScaleDiagram from "./ScaleDiagram";

// TODO: rename project to be more general, not specific to microtones
// TODO: move buttons out of ScaleDiagram

export default function App() {
  // TODO: be able to specify text for each dot (put input above them?)
  const [scaleConfig, setScaleConfig] = React.useState({
    count: 12,
    color: "white",
    radius: 5,
    separation: 20
  });

  return (
    <div className="container my-5">
      <h1 className="text-center">Microtone Scale Diagrams</h1>
      <div className="mt-5">
        <ScaleDiagram {...scaleConfig} />
        <ScaleDiagram count={24} color="black" radius={5} separation={10} />
      </div>
    </div>
  );
}
