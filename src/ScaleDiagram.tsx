import React from "react";
import range from "lodash.range";
import { saveAs } from "file-saver";
import { saveSvgAsPng } from "save-svg-as-png";

const ScaleDiagram = React.forwardRef(
  (
    {
      count,
      color,
      radius,
      separation
    }: {
      count: number;
      color: string;
      radius: number;
      separation: number;
    },
    ref
  ) => {
    const diameter = radius * 2;
    const height = diameter;
    const width = count * (diameter + separation) - separation;
    return (
      <div>
        <svg
          id="diagram"
          viewBox={`0 0 ${width} ${height}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {range(count).map(idx => {
            return (
              <circle
                cx={(diameter + separation) * idx + radius}
                cy={radius}
                r={radius}
                style={{ fill: color }}
              />
            );
          })}
          {range(count - 1).map(idx => {
            const x1 = (diameter + separation) * idx + radius;
            return (
              <line
                x1={x1}
                y1={radius}
                x2={x1 + diameter + separation}
                y2={radius}
                style={{
                  stroke: color,
                  strokeWidth: 1
                }}
              />
            );
          })}
        </svg>

        <button
          className="btn btn-secondary"
          onClick={() => {
            const svgElement: HTMLElement = document.getElementById("diagram")!;
            const svgBlob = new Blob([svgElement.outerHTML], {
              type: "image/svg+xml"
            });
            saveAs(svgBlob, "diagram.svg");
          }}
        >
          Download .svg
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => {
            const svgElement: HTMLElement = document.getElementById("diagram")!;
            saveSvgAsPng(svgElement, "diagram.png", { scale: 4 });
          }}
        >
          Download .png
        </button>
      </div>
    );
  }
);

export default ScaleDiagram;
