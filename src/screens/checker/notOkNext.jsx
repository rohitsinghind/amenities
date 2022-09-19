import React,{useState, useEffect} from "react";
import axios from "axios";
import { Button, Checkbox, Input, Logo, Text } from "../../component/Util";
import { Link, useNavigate } from "react-router-dom";

export default function CheckerNotOkNext(props) {

  let navigate = useNavigate();

  const reasons = [
    "Water on floor",
    "No Lights/Power",
    "Mirror dirty",
    "Sewage not cleaned",
  ];

  let selectedReasons = [];
  const [cred, setCred] = useState({status:"", remark:""})

  const [data2, setData2] = useState("")

  const onChangeCred = (e)=>{
    setCred({...cred,[e.target.name]:e.target.value})
  }

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


  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="container">
      <Logo />
      <div className="row">
        <Text lable="Aminities management" color="blue" fontWeight={"bold"} />
        <Text lable="13/09/2022" mx="10px" />
        <Text lable="14:25" />
      </div>
      <Text lable={"Amenity ID: "+props.houseId} align="center"/>
      <Text lable={"Address: "+ data2?.address} align="center"/>
      <p style={{ textDecoration: "underline" }}>Reason for non-complition</p>
      <Checkbox lable={"Door Locked "} mx="1rem" />
      <Checkbox lable={reasons[1]} mx="1rem" />
      <Checkbox lable={reasons[2]} mx="1rem" />
      <Checkbox lable={reasons[3]} mx="1rem" />{" "}
      <Text lable={"Others"} mx="1rem" align="center"/>
      <input
        id="remark"
        name="remark" 
        type="textarea"
        value={cred.remark} 
        onChange={onChangeCred}
        style={{
          borderColor: "rgb(23, 173, 23)",
          height: "3rem",
          marginLeft: "3rem",
          marginBottom: "2rem",
        }}
      />
      {/* <Link to={"/MakerNotOk"}> */}
      <div onClick={()=>{props.setCred(cred); navigate('/CheckerNotOk')}}>
      <Button lable="Submit" />
      </div>
      {/* </Link> */}
    </div>
  );
}
