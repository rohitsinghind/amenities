import React from "react";
import { Button, Checkbox, Input, Logo, Text } from "../../component/Util";

export default function Review() {
  const reasons = [
    "Door locked",
    "No Lights/Power",
    "No water",
    "No water leakage",
  ];

  let selectedReasons = [];

  return (
    <div className="container">
      <Logo />
      <div className="row">
        <Text lable="Aminities management" color="blue" fontWeight={"bold"} />
        <Text lable="13/09/2022" mx="10px" />
        <Text lable="14:25" />
      </div>
      <Text lable={"Amenity ID:"} />
      <Text lable={"Address:"} />
      <p style={{ textDecoration: "underline" }}>Reason for non-complition</p>
      <Checkbox lable={"Door Locked "} mx="1rem" />
      <Checkbox lable={reasons[1]} mx="1rem" />
      <Checkbox lable={reasons[2]} mx="1rem" />
      <Checkbox lable={reasons[3]} mx="1rem" />{" "}
      <Checkbox lable={"Others"} mx="1rem" />
      <input
        type="textarea"
        style={{
          borderColor: "rgb(23, 173, 23)",
          height: "3rem",
          marginLeft: "3rem",
          marginBottom: "2rem",
        }}
      />
      <Button lable="Sublit" />
    </div>
  );
}
