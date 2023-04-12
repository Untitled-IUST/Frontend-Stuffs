import React, { useState,useEffect } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import"../css/ImageSlider.css"
import CallIcon from '@mui/icons-material/Call';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import GradeIcon from '@mui/icons-material/Grade';
import axios from "axios";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const [value, setValue] = React.useState(0);
  const [flag, setFlag] = React.useState(false);

  const[nameofsalon,setNameofsalon]=useState(null)
  const[address,setAddress]=useState(null)
  const[phonenumberofsalon,setPhonenumberofsalon]=useState(null)
  const[data,setMydata]=useState('')
  useEffect(()=> {
    axios.get("https://amirmohammadkomijani.pythonanywhere.com/barber/info/1/   ")

    .then((response) => {
        console.log(response.data)
        setMydata(response.data)
    }).catch(err=> console.log(err)).finally(setFlag(true))
    },)


  

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  const handleFilterChange = (event) => {
    //check if password is correct
  }
  const handleNameofsalon =(event) => {  
    setNameofsalon(event.target.value);
  }
 const handleAddress=(event) => {
    setAddress(event.target.value);
 }
  const handlePhonenumberofsalon=(event) => {
    setPhonenumberofsalon(event.target.value);
 }


  return (
    <div className='wholebarber'>
      <p className='barber'  >Name of salon {data.BarberShop}</p>
        <section className='slider'>
          <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
          <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt='barber image' className='image' />
                )}
              </div>
            );
          })}
        </section>
        <diV>
          <img style={{ width: 240,
        height: 230, marginLeft:640,
        marginTop:20,
          borderRadius: 130,}} src={"https://s2.uupload.ir/files/348ad8c26d7ff7b6c23fe3e30f3e44dd_ducd.jpg"} alt="React lost" />
        </diV>

        <div> 
        <p className='barber1'>___________________________servises___________________________</p>
        <img style={{ width: 140,
          height: 130, marginLeft:500,
          borderRadius: 130,
            }} src= "https://s2.uupload.ir/files/969d06b413bc138719a3fb26fffc989d_h7sl.jpg"alt="React lost" />
          <img style={{ width: 140,
          height: 130, marginLeft:50,
          borderRadius: 130,
            }} src= "https://s2.uupload.ir/files/f6bab4d47f99bdbb85d06f0d8b05c7bc_3zf6.jpg"alt="React lost" />
          <img style={{ width: 140,
          height: 130, marginLeft:50,
          borderRadius: 130,
            }} src= "https://s2.uupload.ir/files/26b565408bc94830eecee1a7533dea55_q2gk.jpg"alt="React lost" />
          </div>
      <div>
      <select className='selectmakeup' >
        <option value="fmake">Makeup service</option>
        <option value="fmake">Face make up</option>
        <option value="fmake">Wedding make up</option>
      </select>
      <select className='selecthair ' >
        <option value="fmake">Hair service</option>
        <option value="fmake">Haircut</option>
        <option value="fmake">Shinion</option>
        <option value="fmake">Hair color</option>
      </select>
      <select className='selectskin' >
        <option value="fmake">Skin service</option>
        <option value="fmake">Brush</option>
        <option value="fmake">Skin routin</option>
      </select>
      
      <diV/>
      <div>
          <img style={{ width: 700,
        height: 500, marginLeft:10,
        marginTop:100,
          borderRadius: 20,}} src= "https://s2.uupload.ir/files/nineteen91_salon_myminerva.jpeg_cdsv.jpg"alt="React lost" />

        </div>

        <p  className='info'> Name of salon beauty {data.BarberShop} </p>
        <p className='info1'> our salon beauty is a calm and nice plase
        which will give you the best experince of a beauty salon you ever try. We have perfoshebal artists and good services
        enjoy your time</p>
        <p className='info2' >Owner: {data.Owner} </p>
        <FmdGoodIcon style={{ marginLeft:730,marginBottom:-25,color:'#ffd3d3'
      }} ></FmdGoodIcon>
      <p className='info2' >Address: {data.address} </p>
        <CallIcon style={{ marginLeft:730,marginBottom:-25,color:'#ffd3d3'
      }}></CallIcon>
      <p className='info2' onChange={handleNameofsalon}>Phone Number: {data.phone_Number} </p>
      <GradeIcon style={{ marginLeft:760,marginBottom:-25,color:'#e6f335'
      }}></GradeIcon> <p className='info3'>Rate {data.rate}</p>


  </div>
  </div>
        
  
  );
};
export default ImageSlider;