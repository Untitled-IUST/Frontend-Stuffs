import React , { useState , useEffect} from "react";
import SalonCard from "../../components/salonCard";
import { Pagination } from "@mui/material";

const SalonSelect = () => {
  
  const [data , setData] = useState([]);
  const [continueApi , setContinueApi] = useState("");
  const [page ,setPage] = useState(1);
  const [howManyPages, setHowManyPages] = useState(0);
  const baseURL = "https://amirmohammadkomijani.pythonanywhere.com/barber/info/"

  useEffect(() => {
    async function fetchData(){
      try{
        const response = await fetch(baseURL+continueApi);
        const fetchedData = await response.json();
        setData(fetchedData.results);
        setHowManyPages(Math.ceil(fetchedData.count/9));
      } catch(error){
        console.log(error);
      }
    }
    fetchData();
  },[continueApi])

  
  const handleChange = (event,value) => {
    setPage(value);
  }

    return(
      <div>
        <div className="justify-center max-w-[1400px] flex flex-col sm:flex-row-reverse">
          <aside className="m-4  bg-pink-400 ">
            ff
          </aside>
          <div className="flex-1 m-4 bg-black grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-1">
            {data.map((item) =>(
              <div key={item.id}>
              <SalonCard id={item.id} name={item.BarberShop} phoneNumber={item.phone_Number} address={item.address} rate={item.rate} background={item.background} logo={item.logo}/> 
              </div>
            ))}
          </div>
        </div>
        {/* <div className="p-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-pink-400	" style={{position: "fixed", bottom: "77px"}}>
          <Pagination count={howManyPages} page={page} color="secondary" onChange={handleChange}/>
        </div> */}
      </div>
  )}
export default SalonSelect;