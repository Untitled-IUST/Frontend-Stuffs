import React from 'react'
import "./css/Receipt.css"
// import { getRestaurant } from '../../Services/axios'
import { useState,useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BrowserRouter , Routes , Route , Navigate , useNavigate} from "react-router-dom";

import { useLocation } from 'react-router-dom';

export const Receipt = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams()
  const [rest,setRest] = useState({})
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

  function handleSubmit () {
    navigate('/user/orders')
  }

  return (
    <div className='ReceiptMain'>
      <div className='ReceiptContainer'>
        <img className="ReceiptRestLogo" src={rest.logoImg}></img>
        <div className='ReceiptCard'>
          <div className='ReceiptTop'>
          <p className='ReceiptResponse'>
            Your order has succesfully received!
          </p>
          </div>

          <div className='ReceiptDetails'>
            <div className='ReceiptList'>
              <p>Salon name</p> 
              <p className='answer'>: {rest.name}</p>
            </div>
            <div className='ReceiptList'>
              <p>Order number</p> 
              {/* <p className='answer'>: {orderId}</p> */}
            </div>
            <div className='ReceiptList'>
              <p>Date</p> 
              <p className='answer'>: {date}</p>
            </div>
            <div className='ReceiptList'>
              <p>Final price</p> 
              <p className='answer'>: {money}$</p>
            </div>
          </div>

          <div className='ReceiptBottom'>
            <p>You can follow up your order from here:</p>
            <button className='ReceiptButton' onClick={()=>handleSubmit()}>Order status</button>
          </div>
        </div> 
      </div>
    </div>
  )
}