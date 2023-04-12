import React , { useState , useEffect} from "react";
import axios from "axios";
import SalonCard from "../../components/salonCard";
import { Pagination, Typography } from "@mui/material";

const SalonSelect = () => {
  
  const [data , setData] = useState("");
  const [error, setError] = useState(null);
  const [page ,setPage] = useState(1);
  const baseURL = "https://amirmohammadkomijani.pythonanywhere.com/barber/info/"
  const [continueApi , setContinueApi] = useState("");
  const [howManyPages, setHowManyPages] = useState(Math.ceil(data["count"]/9));

  const handleChange = (event,value) => {
    setPage(value);
  }

  useEffect(() => {
    if(page === 1){
      setContinueApi("");
    }
    else{
      setContinueApi("?page="+page);
    }
  }, [page]);
 
  useEffect ( () => {
    const fetchData = async () => {
      const result = await axios(
        baseURL+continueApi
      );
      setData(result.data["results"]);
      setHowManyPages(Math.ceil(result.data["count"]/9));
    };
    fetchData();
  },[continueApi])
  
  useEffect( () => {
    console.log(page);
    console.log(continueApi);
    console.log(data);
  },[data])
    
    return(
      <div>
        <div>
          
        </div>
        <div className="bg-black grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-4">
          {Object.keys(data).map(id =>(
            <div key={id}>
            <SalonCard id={data[id]["id"]} name={data[id]["BarberShop"]} phoneNumber={data[id]["phone_Number"]} address={data[id]["address"]} rate={data[id]["rate"]} image1={data[id]["images"][0]["background"]} image2={data[id]["images"][0]["logo"]}/> 
            </div>
          ))}
        </div>
        <div className="p-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-pink-400	" style={{position: "fixed", bottom: "77px"}}>
          <Pagination count={howManyPages} page={page} color="secondary" onChange={handleChange}/>
        </div>
      </div>
  )}
export default SalonSelect;