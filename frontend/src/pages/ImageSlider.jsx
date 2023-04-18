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
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function ImageSlider ({ slides }, props) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
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
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };
  const[data,setMydata]=useState('')
  const[img,setImg]=useState(0)
  const[img1,setImg1]=useState(0)
  let { id } = useParams();
  useEffect(()=> {
  // axios.get(`https://amirmohammadkomijani.pythonanywhere.com/barber/info/${props.id}/`)
  axios.get('https://amirmohammadkomijani.pythonanywhere.com/barber/info/1')
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
        <diV/> 
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
    <React.Fragment>
      <Tabs value={currentTabIndex} onChange={handleTabChange} centered>
        <Tab label='Hair' />
        <Tab label='Makeup' />
        <Tab label='Skin' />
      </Tabs>

      {/* TAB 1 Contents */}
      {currentTabIndex === 0 && (
        <Box sx={{ p: 3, bgcolor: '#ffecee' }}>
          <Typography variant='h5'>Tab 1 Content</Typography>
          <Typography variant='p'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
finibus odio eget orci bibendum, ac hendrerit mi porta. Nullam
volutpat libero tempus leo lacinia ornare. In hac habitasse platea
dictumst. Pellentesque facilisis ex eget vulputate tincidunt.
Curabitur fringilla ultrices commodo.
          </Typography>
        </Box>
      )}

      {/* TAB 2 Contents */}
      {currentTabIndex === 1 && (
        <Box sx={{ p: 3 }}>
          <Typography variant='h5'>Tab 2 Content</Typography>
          <Typography variant='p'>
Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text
ever since the 1500s, when an unknown printer took a galley of type
and scrambled it to make a type specimen book.
          </Typography>
        </Box>
      )}

      {/* TAB 3 Contents */}
      {currentTabIndex === 2 && (
        <Box sx={{ p: 3 }}>
          <Typography variant='h5'>Tab 3 Content</Typography>
          <Typography variant='p'>
It is a long established fact that a reader will be distracted by
the readable content of a page when looking at its layout. The point
of using Lorem Ipsum is that it has a more-or-less normal
distribution of letters, as opposed to using 'Content here, content
here', making it look like readable English.
          </Typography>
        </Box>
      )}
    </React.Fragment>







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