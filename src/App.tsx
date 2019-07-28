import React from "react";
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
        <form>
          <div className="row">
            <div className="col-12 col-md-3">
              <label>Count</label>
              <input
                className="form-control"
                type="number"
                value={scaleConfig.count}
                min={1}
                max={1000}
                onChange={event => {
                  setScaleConfig({
                    ...scaleConfig,
                    count: parseInt(event.target.value)
                  });
                }}
              />
            </div>
            <div className="col-12 col-md-3">
              <label>Radius</label>
              <input
                className="form-control"
                type="number"
                value={scaleConfig.radius}
                min={1}
                max={1000}
                onChange={event => {
                  setScaleConfig({
                    ...scaleConfig,
                    radius: parseInt(event.target.value)
                  });
                }}
              />
            </div>
            <div className="col-12 col-md-3">
              <label>Separation</label>
              <input
                className="form-control"
                type="number"
                value={scaleConfig.separation}
                min={1}
                max={1000}
                onChange={event => {
                  setScaleConfig({
                    ...scaleConfig,
                    separation: parseInt(event.target.value)
                  });
                }}
              />
            </div>
            <div className="col-12 col-md-3">
              <label>Color</label>
              <input
                className="form-control"
                type="text"
                value={scaleConfig.color}
                onChange={event => {
                  setScaleConfig({ ...scaleConfig, color: event.target.value });
                }}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="mt-5">
        <ScaleDiagram {...scaleConfig} />
      </div>
    </div>
  );
}
