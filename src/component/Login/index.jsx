import React from "react";
import "./style.css";
import { Button, Input, Text, Logo } from "../Util";
import { useNavigate , Link} from "react-router-dom";

export default () => {

  let navigate = useNavigate();

  return (
    <div className="container">
      <Logo />
      <Text
        lable="Amenities management"
        color="blue"
        fontWeight="bold"
        align="inherit"
      />
      <Input lable="User Id" />
      <Input type="password" lable="Password" />
      <div style={{ alignSelf: "center" }}>
        <Link to="/makerHome">
        <Button lable="Login" onClick={() => {
            }}/>
            </Link>
      </div>
    </div>
  );
};
