import React,{useState, useEffect} from "react";
import axios from "axios";
import { Button, Logo, Text, Checkbox } from "../../component/Util";
import {useParams, Link, useNavigate } from "react-router-dom";

export default function UserScan(props) {

  let navigate = useNavigate();

  const reasons = [
    "Water on floor",
    "No Lights/Power",
    "Mirror dirty",
    "Sewage not cleaned",
  ];

  let selectedReasons = [];
  const [data, setData] = useState("")
  const [cred, setCred] = useState({status:"", remark:""})
  const { amenity_id } = useParams();

  const onChangeCred = (e)=>{
    setCred({...cred,[e.target.name]:e.target.value})
  }

  // Get data
  const getData = async () => {
  
    try {
      const response = await axios.get(`/amenity/${amenity_id}`,
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

// //write data
//   const writeData = async () => {
  
//     try {
//       const response = await axios.post(`/toilet/work_order`,
//       {
//         "house_id": "HS0034893",
//         "status_id": "DRY",
//         "lat": 0.87887,
//         "lng": 0.232323,
//         "remarks": "No Lights",
//         "rating": 1,
//         "created_by_id": null
//       },
//       {
//         headers: {
//             "Content-Type": "application/json",
//         },
//     }
//     );
//     console.log(response?.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };



  useEffect(() => {
    getData();
    props.setHouseId(amenity_id)
  }, []);

  console.log(data)

  return (
    <div className="container">
    <Logo />
    <div className="row">
      <Text lable="Aminities management" color="blue" fontWeight={"bold"} />
      <Text lable="13/09/2022"/>
      <Text lable="14:25"/>
    </div>
    <Text lable={"Amenity ID: "+ amenity_id} align="center"/>
    <Text lable={"Address: "+data?.address} align="center"/>
    <p style={{ textDecoration: "underline" }}>Reason for non-complition</p>
    <Checkbox lable={reasons[0]} mx="1rem" />
    <Checkbox lable={reasons[1]} mx="1rem" />
    <Checkbox lable={reasons[2]} mx="1rem" />
    <Checkbox lable={reasons[3]} mx="1rem" />{" "}
    <Checkbox lable={"Others"} mx="1rem" />
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
    {/* <Link to="/UserReviewRes"> */}
    <div onClick={()=>{props.setCred(cred); navigate('/UserReviewRes')}}>
    <Button lable="Submit" />
    </div>
    {/* </Link> */}
  </div>
  );
}
