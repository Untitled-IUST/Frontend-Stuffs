import React , { useState , useEffect} from "react";
import axios from "axios";
import SalonCard from "../../components/salonCard";
const SalonSelect = () => {
  
  const [data , setData] = useState("");
  const [error, setError] = useState(null);
  
  useEffect( () => {
    axios
      .get("https://amirmohammadkomijani.pythonanywhere.com/barber/info/")
      .then((res) => {
        setData(res.data)
      })
      .catch(error => setError(error.response.data));
    },[]);
    

    return(
      <div>
        <div>
          
        </div>
        <div className="bg-black grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-4">
          {Object.keys(data).map(id =>(
            <div key={id}>
            <SalonCard name={data[id]["BarberShop"]} phoneNumber={data[id]["phone_Number"]} address={data[id]["address"]} rate={data[id]["rate"]} image1={data[id]["images"][0]["background"]} image2={data[id]["images"][0]["logo"]}/> 
            </div>
          ))}
        </div>
      </div>
  )}
export default SalonSelect;