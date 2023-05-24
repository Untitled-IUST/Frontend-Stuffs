import React from 'react'
import "./css/Receipt.css"
// import { getRestaurant } from '../../Services/axios'
import { useState,useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BrowserRouter , Routes , Route , Navigate , useNavigate} from "react-router-dom";

import { useLocation } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import GradeIcon from '@mui/icons-material/Grade';





export const Receipt = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams()
  const [rest,setRest] = useState({})
  const [value, setValue] = useState(0);
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
//   const [price,setPrice] = useState (searchParams.get("price"))
//   const [id, setId] = useState(searchParams.get("id"))
//   const [orderId , setOrderId] = useState(searchParams.get("OrderId"))
  const navigate = useNavigate()
  const queryString = new URLSearchParams(location.search);
  const money = queryString.get('value');


//   useEffect(() => {
//     getRestaurant(id).then (e => {
//       setRest({
//         name: e.data.name,
//         logoImg: e.data.logoImg,
//       })
//     }).catch()
//   },[]);


const handleRatingChange = (event, newValue) => {
  setValue(newValue);
  // You can add any additional logic or functionality here that you want to run whenever the rating value changes
};


  function handleSubmit () {
    navigate('/SalonSelect')
  }

  return (
    <div className='ReceiptMain'>
      <div className='ReceiptContainer'>
        <div className='ReceiptCard'>
          <div className='ReceiptTop'>
          <p className='ReceiptResponse'>
            Your order has succesfully received!
          </p>
          </div>

          <div className='ReceiptDetails'>
            <div className='ReceiptList'>
              <p>Date</p> 
              <p className='answer'>: {date}</p>
            </div>
            <div className='ReceiptList'>
              <p>Final price</p> 
              <p className='answer'>: {money}$</p>
            </div>
          </div>
          <Typography component="legend">Controlled</Typography>
          <div>
              <Rating
            name="simple-controlled"
            value={value}
            onChange={handleRatingChange}
            emptyIcon="☆"
            fullIcon="★"
            readOnly={false}
          />
          
           <Item className='bx'><GradeIcon style={{ marginLeft:0,marginBottom:-6,color:'#fec20c',fontSize:25,
      }}></GradeIcon>Rate</Item>
          </div>
          <div className='ReceiptBottom'>
            <p>Back to being beauty!</p>
            <button className='ReceiptButton' onClick={()=>handleSubmit()}>salons</button>
          </div>
        </div> 
      </div>
    </div>
  )
}