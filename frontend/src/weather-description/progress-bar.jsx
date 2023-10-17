import React from "react";

function ProgressBar({ color, progress }) {
  const pdiv = {
    width: "20rem",
    backgroundColor: "white",
    borderRadius: 40,
    margin: 50,
  };

  const cdiv = {
    width: `${progress}%`,
    backgroundColor: color,
    borderRadius: 40,
    textAlign: "right",
  };

  const text = {
    padding: 10,
    color: "#7D7C7C",
    fontFamily: "Dela Gothic One",
  };

  return (
    <div style={pdiv}>
      <div style={cdiv}>
        <span style={text}>{`${progress}`}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
