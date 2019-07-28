import React from "react";
import range from "lodash.range";

import { DiagramConfig } from "./types";

const Diagram = React.forwardRef((
  { diagramConfig }: { diagramConfig: DiagramConfig },
  // TODO: type better
  ref: any
) => {
  const { radius, count, separation, color } = diagramConfig;
  const diameter = radius * 2;
  const height = diameter;
  const width = count * (diameter + separation) - separation;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
    >
      {range(count).map(idx => {
        return (
          <circle
            cx={(diameter + separation) * idx + radius}
            cy={radius}
            r={radius}
            style={{ fill: color }}
            key={idx}
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
            key={idx}
          />
        );
      })}
    </svg>
  );
});

export default Diagram;
