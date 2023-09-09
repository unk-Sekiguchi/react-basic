import React from "react";

export const ColorfulMessage = (props) => {
  console.log("ColorFull");
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
