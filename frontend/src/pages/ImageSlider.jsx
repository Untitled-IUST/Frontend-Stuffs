import React, { useState,useEffect } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import"../css/ImageSlider.css"
import CallIcon from '@mui/icons-material/Call';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import GradeIcon from '@mui/icons-material/Grade';
import axios from "axios";
import {useParams} from 'react-router-dom';
import BrushIcon from '@mui/icons-material/Brush';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const ImageSlider = ({ slides }, props) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const [value, setValue] = React.useState(0);

  const[nameofsalon,setNameofsalon]=useState(null)
  const[address,setAddress]=useState(null)
  const[phonenumberofsalon,setPhonenumberofsalon]=useState(null)
  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto',
    },
  });
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffecee',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'left',
    color: '#120c1e',
    fontFamily: 'Roboto',
    fontSize:  25,
    borderRadius:10,
  }));
  const[data,setMydata]=useState('')
  const[img,setImg]=useState(0)
  const[img1,setImg1]=useState(0)
  let { id } = useParams();
  useEffect(()=> {
  axios.get(`https://amirmohammadkomijani.pythonanywhere.com/barber/info/${props.id}/`)
    .then((response) => {
        setMydata(response.data)
        console.log(data.images[0].background)
        console.log("************** The id is **************** ", id)
        setImg(data.images[0].logo)
        setImg1(data.images[0].background)
    }).catch(err=> console.log(err))
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
        <div> 
           <img style={{ width: 200, 
                height: 200, marginLeft:3,position: 'relative',border:"dotted"   ,borderColor: "#120c1e", borderWidth:3,
                zIndex: '3',marginBottom:50,  marginTop:-400,
           borderRadius: 130,}} src={img} alt="React lost" />

      <Container fixed>
      <Typography component="div">
      <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'rgba(248, 220, 220, 0.35)', width: 400,borderRadius:3,
        height: 90,textAlign: 'center', ml: 48,mt:-10,fontSize: 30, mb:10, fontFamily: 'Roboto, ' ,pt:4, color:'#ffecee'}}>
        Name of salon {data.BarberShop}
      </Box>
      </ThemeProvider>
    </Typography>
    </Container>



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
      <Container fixed>
      <Typography component="div">
      <Box sx={{ bgcolor: '#ffecee', width: 500,
        height: 50,textAlign: 'left', ml: 93 ,fontSize: 30, mt:20,mb:-25,fontFamily:'Roboto',p: 3 , color:'#120c1e',borderRadius:3}}>
    you are beautiful cause you care.
      </Box>
    </Typography>
    </Container>
      <Container fixed>
      <div>
          <img style={{ width: 560,
        height: 500, marginLeft:-150,
        marginTop:100,
          borderRadius: 10,}} src= "https://s2.uupload.ir/files/studio_benicky_salon_design.jpeg_parj.jpg"alt="React lost" />

        </div>

    <Typography component="div">
      
      <Box sx={{ bgcolor: '#ffecee', width: 500,
        height: 255,textAlign: 'left', ml: 93 ,mt:-40,fontSize: 30, mb:15,fontFamily:'Roboto',p: 3 , color:'#120c1e',borderRadius:3}}>
      our salon beauty is a calm and nice plase
        which will give you the best experince of a beauty salon you ever try. We have perfetional artists and good services
        enjoy your time
      </Box>
    </Typography>
    </Container>
    {/* <Container fixed>
    <Box
      sx={{
        width: '62%',
        height: '270px',
        bgcolor: 'rgba(248, 220, 220, 0.35)',
        mt:15,
        ml: 3 ,
        '& > .MuiBox-root > .MuiBox-root': {
          p: .5,
          borderRadius: 5,
          color:'#fdccc8',
          fontSize:  25,
          fontFamily:'Roboto',
        },
      }}
    >
      <Box
        sx={{
          ml:4,
          mr:1,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 2,
          gridTemplateRows: 'auto',
          gridTemplateAreas: `"header header header header"
        "main main main main"
        "one one one one"
        "footer footer footer footer"`,
        }}
      >
        <Box sx={{ gridArea: 'header', bgcolor: '#382b49' }}>Owner: {data.Owner}
        <BrushIcon  style={{ marginLeft:-190,marginBottom:-3,color:'#ffecee' ,fontSize:35,
      }}></BrushIcon> 

        </Box>
        <Box sx={{ gridArea: 'main', bgcolor: '#382b49' }}> Address: {data.address} 
        <FmdGoodIcon style={{ marginLeft:-220,marginBottom:-3,color:'#ffecee',fontSize:35,
      }} ></FmdGoodIcon></Box>
        <Box sx={{ gridArea: 'one', bgcolor: '#382b49' }}>Phone Number: {data.phone_Number} 
        <CallIcon style={{ marginLeft:-340,marginBottom:-5,color:'#ffecee',fontSize:35,
      }}></CallIcon></Box>
        <Box sx={{ gridArea: 'footer', bgcolor: '#382b49' }}>Rate: {data.rate}
        <GradeIcon style={{ marginLeft:-130,marginBottom:-6,color:'#ffecee',fontSize:35,
      }}></GradeIcon>
        </Box>
      </Box>
    </Box>
    </Container> */}
    <Container fixed>
      <Box sx={{ width: '125%',ml:-18}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 40 }}>
          <Grid item xs={6}>
            <Item ><BrushIcon  style={{ marginLeft:0,marginBottom:-3,color:'#120c1e' ,fontSize:35,
      }}></BrushIcon> Owner: {data.Owner}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item><FmdGoodIcon style={{ marginLeft:0,marginBottom:-3,color:'#120c1e',fontSize:35,
      }} ></FmdGoodIcon> Address: {data.address} </Item>
          </Grid>
          <Grid item xs={6}>
            <Item><CallIcon style={{ marginLeft:0,marginBottom:-5,color:'#120c1e',fontSize:35,
      }}></CallIcon> Phone Number: {data.phone_Number} </Item>
          </Grid>
          <Grid item xs={6}>
            <Item><GradeIcon style={{ marginLeft:0,marginBottom:-6,color:'#120c1e',fontSize:35,
      }}></GradeIcon>Rate: {data.rate}</Item>
          </Grid>
        </Grid>
      </Box>
    </Container>


      


  </div>
  </div>
        
  
  );
};
export default ImageSlider;