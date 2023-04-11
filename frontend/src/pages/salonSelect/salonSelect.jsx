import React , { useState , useEffect} from "react";
import axios from "axios";
import SalonCard from "../../components/salonCard";

const SalonSelect = () => {
  const [data , setData] = useState("");
  const [error, setError] = useState(null);

  useEffect( () => {
    axios.get("https://amirmohammadkomijani.pythonanywhere.com/barber/info/")
         .then(res => setData(res.data))
         .catch(error => setError(error.response.data));
  },[]);
  console.log(data);

  return(
    <div>
      <ul>
          <li>
                       
           <SalonCard name={data["BarberShop"]} phoneNumber={data["phone_Number"]} address={data["address"]} rate={data["rate"]} image1={data["images"][0]} image2={data["images"][1]}/> 
          </li>
      </ul>
    </div>

  )
}

export default SalonSelect;