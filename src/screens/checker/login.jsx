import React from "react";
import { Button, Input, Text, Logo } from "../../component/Util";
import { useNavigate , Link} from "react-router-dom";

const checkerLogin = () => {
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
        <Link to="/CheckerHome">
        <Button lable="Login" onClick={() => {
            }}/>
            </Link>
      </div>
    </div>
  );
};
export default checkerLogin;
