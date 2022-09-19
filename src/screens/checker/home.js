import React from "react";
import { Button, Logo, Text } from "../../component/Util";
import { Link } from "react-router-dom";

export default function checkerHome() {
  return (
    <div className="container">
      <Logo />
      <Text color="blue" fontWeight="bold" lable="Amenities Management" align="center"/>
      <Text lable="Welcome Akash Shrama" my="20px" align="center"/>
      <Link to="/CheckerScan">
      <Button lable="Scan" align="center" />
      </Link>
    </div>
  );
}
