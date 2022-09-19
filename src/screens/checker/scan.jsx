import React, { useState } from "react";
import { Button, Logo, Text } from "../../component/Util";
import { Link } from "react-router-dom";
import QrReader from "react-qr-reader";

export default function CheckerScan(props) {


  const handleErrorWebCam = (error) => {
    console.log(error);
  }

  const handleScanWebCam = (result) => {
    if (result){
        // setScanResultWebCam(result);
        props.setHouseId(result.slice(-9));
    }
   }

  return (
    <div className="container">
      <Logo />
      <div className="row">
        <Text lable="Amenities management" color="blue" fontWeight={"bold"} />
        <Text lable="13/09/2022" mx="10px" />
        <Text lable="14:25" />
      </div>

      <QrReader
        delay={300}
        style={{ width: "100%", maxWidth: "600px"}}
        onError={handleErrorWebCam}
        onScan={handleScanWebCam}
      />

      <h3>Scanned By WebCam Code: {props.houseId}</h3>

      {/* <Link to="/MakerScanResult">
        <Button lable="Scan" align="center" />
      </Link> */}
    </div>
  );
}
