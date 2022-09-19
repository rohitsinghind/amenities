import React,{useState, useEffect} from "react";
import axios from "axios";
import { Button, Logo, Text } from "../../component/Util";
import { Link } from "react-router-dom";

export default function CheckerScanResult(props) {

  const [data, setData] = useState("")

  const getData = async () => {
    try {
      const response = await axios.get(`/amenity/${props.houseId}`,
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
  }, []);

  console.log(data)

  return (
    <div className="container">
    <Logo />
    <div className="row">
      <Text lable="Amenities management" color="blue" fontWeight={"bold"} />
      <Text lable="13/09/2022" mx="10px" />
      <Text lable="14:25" />
    </div>
   
    <Text lable={"Amenity ID: " + props.houseId} mx="30%"/>
    <Text lable={"Amenity Type: "+data?.prop_type} mx="30%"/>
    <Text lable={"Address: "+data?.address} mx="32%" />
    <Text lable={"Location: "+data?.location} mx="32%" />
    <Text lable={"Area: "+data?.area} mx="32%" />
    <Text lable={"Zone: "+data?.zone} mx="32%" />
   
    <div
      className="row"
      style={{ marginTop: "40px", justifyContent: "space-around" , display: "flex"}}
    >
      <Link to="/MakerOk">
      <Button lable="Ok" width="90px"/>
      </Link>
      <Text lable={""} mx="10px"/>
      <Link to="/CheckerNotOkNext">
      <Button lable="Not Ok" width={"90px"}/>
      </Link>
    </div>
  </div>
  );
}
