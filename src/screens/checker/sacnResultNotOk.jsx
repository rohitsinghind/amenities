import React,{useState, useEffect} from "react";
import axios from "axios";
import MakerOk from "./scanResultOk";
import { Button, Logo, Text } from "../../component/Util";
import { Link, useNavigate } from "react-router-dom";

const CheckerNotOk = (props) => {
  let navigate = useNavigate();

  const [data, setData] = useState("")
  const [data2, setData2] = useState("")

   // Get data
   const getData = async () => {
  
    try {
      const response = await axios.get(`/amenity/${props.houseId}`,
      {
        headers: {
            "Content-Type": "application/json",
        },
    }
    );
    setData2(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  //write data
  const writeData = async () => {
  
    try {
      const response = await axios.post(`/toilet/work_order`,
      {
        "house_id": props.houseId,
        "status_id": "DRY",
        "lat": 0.87887,
        "lng": 0.232323,
        "remarks": props?.cred?.remark,
        "rating": 1,
        "created_by_id": 1
      },
      {
        headers: {
            "Content-Type": "application/json",
        },
    }
    );
    setData(response?.data);
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    getData();
    writeData();
  }, [props.houseId]);

  console.log(data)

  return (
    // <MakerOk setHouseId={props.setHouseId}>
    //   <Text lable="comments:" my="1rem" fontWeight={"bold"} />
    //   <Text lable=" - No water" my=".2rem" fontWeight={"bold"} />
    //   <Text lable=" - No power" my=".2rem" fontWeight={"bold"} />
    // </MakerOk>
    <>
    <div className="container">
      <Logo />
      <div className="row" style={{ marginBottom:"20px" }}>
        <Text lable="Amenities management" color="blue" fontWeight={"bold"}/>
        <Text lable="13/09/2022" mx="10px" />
        <Text lable="14:25" />
      </div>
      <Text lable={"Amenity ID: "+props.houseId} align="center"/>
      <Text lable={"Address: "+ data2?.address} align="center"/>
      <div style={{ width: "400px", marginTop: "10px", marginBottom:"20px" }}>
      <Text
          fontWeight={"bold"}
          lable={`Activity compleated by Manish Kumar for the above amenity at ${data?.created_at}`}
        />
      </div>
      {/* {children || ""} */}
      <Text lable="comments:" my="1rem" fontWeight={"bold"} />
      {/* <Text lable=" - No water" my=".2rem" fontWeight={"bold"} /> */}
     <Text lable={"- "+data?.remarks} my=".2rem" fontWeight={"bold"} />
      {/* <Link to="/MakerScan"> */}
      <div onClick={()=>{props.setHouseId(""); navigate('/CheckerScan')}}>
      <Button lable="New Scan" align="center"/>
      </div>
      {/* </Link> */}
    </div>
    </>
  );
};

export default CheckerNotOk;
