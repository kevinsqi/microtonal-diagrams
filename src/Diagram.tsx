import React from "react";
import range from "lodash.range";

import { DiagramConfig } from "./types";

const Diagram = React.forwardRef((
  { diagramConfig }: { diagramConfig: DiagramConfig },
  // TODO: type better
  ref: any
) => {
  const {
    radius,
    count,
    separation,
    circleColor,
    lineColor,
    textBelowCircle,
    textColor,
    textInCircle
  } = diagramConfig;
  const diameter = radius * 2;
  const height = textBelowCircle ? diameter * 2 : diameter;
  const width = count * (diameter + separation) - separation;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
    >
      {range(count - 1).map(idx => {
        const x1 = (diameter + separation) * idx + radius;
        return (
          <line
            x1={x1}
            y1={radius}
            x2={x1 + diameter + separation}
            y2={radius}
            style={{
              stroke: lineColor,
              strokeWidth: 1
            }}
            key={idx}
          />
        );
      })}
      {range(count).map(idx => {
        const cx = (diameter + separation) * idx + radius;
        const cy = radius;
        return (
          <React.Fragment key={idx}>
            <circle cx={cx} cy={cy} r={radius} style={{ fill: circleColor }} />
            {textInCircle[idx] && (
              <text
                x={cx}
                y={cy}
                style={{
                  fontSize: 5,
                  dominantBaseline: "central",
                  textAnchor: "middle",
                  fill: textColor
                }}
              >
                {textInCircle[idx]}
              </text>
            )}
            {textBelowCircle[idx] && (
              <text
                x={cx}
                y={diameter * 1.6}
                style={{
                  fontSize: 5,
                  fill: textColor,
                  textAnchor: "middle"
                }}
              >
                {textBelowCircle[idx]}
              </text>
            )}
          </React.Fragment>
        );
      })}
    </svg>
  );
});

export default Diagram;
