import React from "react";
import "./style.css";

function Button({ lable, width, align, link }) {
  return (
    <div
      style={{ width: width || "max-content", alignSelf: align || "center" }}
      className="btn"
      onClick={() => console.log("a")}
    >
      {lable}
    </div>
  );
}

function Input({ type, lable, mx, my, items }) {
  return (
    <div
      className="inpt-container"
      style={{
        alignSelf: items || "center",
        margin: `${my || "0.7rem"} ${mx || "0"}`,
      }}
    >
      <p className="lable">{lable}</p>
      <input className="input" type={type || "text"} />
    </div>
  );
}

function Checkbox({ type, lable, mx, my }) {
  return (
    <div
      className="inpt-container"
      style={{
        margin: `${my || "0.7rem"} ${mx || "0"}`,
      }}
    >
      <input className="input" type={type || "checkbox"} />
      <p className="lable" style={{ marginLeft: "10px" }}>
        {lable}
      </p>
    </div>
  );
}

function Text({ lable, color, size, align, fontWeight, mx, my }) {
  let rang;
  if (color === "black") rang = "black";
  else if (color === "blue") rang = "#486AAE";

  return (
    <span
      style={{
        margin: `${my || "0.5rem"} ${mx || "0"}`,
        color: rang || "black",
        fontSize: size || "20px",
        fontWeight: fontWeight || "regular",
        alignSelf: align || "flex-start",
      }}
    >
      {lable}
    </span>
  );
}

function Logo() {
  return <img src="/images/logo.png" className="image" alt="" srcset="" />;
}

export { Button, Input, Logo, Text, Checkbox };
