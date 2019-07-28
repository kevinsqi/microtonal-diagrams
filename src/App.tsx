import React from "react";
import { saveAs } from "file-saver";
import { saveSvgAsPng } from "save-svg-as-png";

import "./App.css";
import Diagram from "./Diagram";
import { DiagramConfig } from "./types";

// TODO: specify width/height
// TODO: rename project to be more general, not specific to microtones

class DiagramContainer extends React.Component<any> {
  svgRef = React.createRef();

  render() {
    return (
      <div>
        <Diagram diagramConfig={this.props.diagramConfig} ref={this.svgRef} />
        <div className="text-center mt-5">
          <button
            className="btn btn-lg btn-secondary"
            onClick={() => {
              const svgElement: HTMLElement = this.svgRef
                .current as HTMLElement;
              const svgBlob = new Blob([svgElement.outerHTML], {
                type: "image/svg+xml"
              });
              saveAs(svgBlob, "diagram.svg");
            }}
          >
            Download .svg
          </button>
          <button
            className="btn btn-lg btn-secondary ml-3"
            onClick={() => {
              const svgElement: HTMLElement = this.svgRef
                .current as HTMLElement;
              saveSvgAsPng(svgElement, "diagram.png", { scale: 4 });
            }}
          >
            Download .png
          </button>
        </div>
      </div>
    );
  }
}

function ConfigForm({
  diagramConfig,
  setDiagramConfig
}: {
  diagramConfig: DiagramConfig;
  setDiagramConfig: (conf: DiagramConfig) => void;
}) {
  return (
    <form>
      <div className="row">
        <div className="col-12 col-md-3">
          <div>
            <label>Circle count</label>
            <input
              className="form-control"
              type="number"
              value={diagramConfig.count}
              min={1}
              max={1000}
              onChange={event => {
                setDiagramConfig({
                  ...diagramConfig,
                  count: parseInt(event.target.value)
                });
              }}
            />
          </div>
          <div className="mt-3">
            <label>Circle radius</label>
            <input
              className="form-control"
              type="number"
              value={diagramConfig.radius}
              min={1}
              max={1000}
              onChange={event => {
                setDiagramConfig({
                  ...diagramConfig,
                  radius: parseInt(event.target.value)
                });
              }}
            />
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div>
            <label>Text in circle</label>
            <input
              className="form-control"
              type="text"
              value={diagramConfig.textInCircle.join(" ")}
              min={1}
              max={1000}
              onChange={event => {
                setDiagramConfig({
                  ...diagramConfig,
                  textInCircle: event.target.value.split(" ")
                });
              }}
            />
            <small className="text-secondary">Separate with spaces</small>
          </div>
          <div className="mt-3">
            <label>Text below circle</label>
            <input
              className="form-control"
              type="text"
              value={diagramConfig.textBelowCircle.join(" ")}
              min={1}
              max={1000}
              onChange={event => {
                setDiagramConfig({
                  ...diagramConfig,
                  textBelowCircle: event.target.value.split(" ")
                });
              }}
            />
            <small className="text-secondary">Separate with spaces</small>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <label>Line length</label>
          <input
            className="form-control"
            type="number"
            value={diagramConfig.separation}
            min={1}
            max={1000}
            onChange={event => {
              setDiagramConfig({
                ...diagramConfig,
                separation: parseInt(event.target.value)
              });
            }}
          />
        </div>
        <div className="col-12 col-md-3">
          <div>
            <label>Circle color</label>
            <input
              className="form-control"
              type="text"
              value={diagramConfig.circleColor}
              onChange={event => {
                setDiagramConfig({
                  ...diagramConfig,
                  circleColor: event.target.value
                });
              }}
            />
          </div>
          <div className="mt-3">
            <label>Line color</label>
            <input
              className="form-control"
              type="text"
              value={diagramConfig.lineColor}
              onChange={event => {
                setDiagramConfig({
                  ...diagramConfig,
                  lineColor: event.target.value
                });
              }}
            />
          </div>
          <div className="mt-3">
            <label>Text color</label>
            <input
              className="form-control"
              type="text"
              value={diagramConfig.textColor}
              onChange={event => {
                setDiagramConfig({
                  ...diagramConfig,
                  textColor: event.target.value
                });
              }}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default function App() {
  const [diagramConfig, setDiagramConfig] = React.useState<DiagramConfig>({
    count: 12,
    circleColor: "#fff",
    lineColor: "#fff",
    radius: 5,
    separation: 20,
    textBelowCircle: ["A", "B", "C"],
    textColor: "#222",
    textInCircle: ["1", "2", "3"]
  });

  return (
    <div className="container my-5">
      <h1 className="text-center">Microtone Scale Diagrams</h1>
      <div className="mt-5">
        <ConfigForm
          diagramConfig={diagramConfig}
          setDiagramConfig={setDiagramConfig}
        />
      </div>
      <div className="mt-5">
        <DiagramContainer diagramConfig={diagramConfig} />
      </div>
      <div className="text-secondary text-center mt-5">
        Built by <a href="https://www.kevinqi.com">@kevinsqi</a>. View source on{" "}
        <a href="https://github.com/kevinsqi/microtonal-diagrams">Github</a>.
      </div>
    </div>
  );
}
