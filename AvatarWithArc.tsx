import React from "react";
import Avatar from "@material-ui/core/Avatar";

type Props = {
  src: string;
  alt: string;
  lineColor: string;
  lineWidth: number;
  percentage: number;
};

const AvatarWithArc = ({
  src = "",
  alt = "",
  blankColor = "white",
  lineColor = "black",
  lineWidth = 15,
  percentage = 10,
}: {
  src?: string;
  alt?: string;
  blankColor?: string;
  lineColor?: string;
  lineWidth?: number;
  percentage?: number;
}) => {
  if (percentage == 100) percentage = 99.999;
  const angle = (percentage * 2 * Math.PI) / 100;
  const inner = (
    <>
      <Avatar
        style={{
          position: "absolute",
          width: (100 - lineWidth).toString() + "%",
          height: (100 - lineWidth).toString() + "%",
          zIndex: 1,
        }}
        src={src}
        alt={alt}
      ></Avatar>
      <svg
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="50"
          strokeWidth={blankColor}
          fill={blankColor}
        ></circle>
        <path
          d={`M50 50 L50 0 A50 50 0 ${percentage >= 50 ? "1" : "0"} 1 ${
            50 + 50 * Math.sin(angle)
          } ${50 - 50 * Math.cos(angle)} Z`}
          stroke={lineColor}
          strokeWidth="1"
        />
      </svg>
    </>
  );
  return <Avatar alt={alt}>{inner}</Avatar>;
};

export default AvatarWithArc;
