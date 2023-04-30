import React, { useState,useEffect } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Select, MenuItem } from '@mui/material';
import { Alert } from '@mui/material';
import { Snackbar } from "@mui/material";


function ImageSlider ({ slides }, props) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

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
  

const StyledMenuItem = styled(MenuItem)({
  backgroundColor: 'red',
  color: 'white',
  '&:hover': {
    backgroundColor: 'blue',
  },
});
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleTabChange = (event, newIndex) => {
    setCurrentTabIndex(newIndex);
  };



  const[data,setMydata]=useState('')
  const[img,setImg]=useState(0)
  const[img1,setImg1]=useState(0)
  const[servicefront, setServicefront] = useState([]) 

  let { id } = useParams();
  useEffect(()=> {
  //axios.get(`https://amirmohammadkomijani.pythonanywhere.com/barber/info/${props.id}/`)
  axios.get('https://amirmohammadkomijani.pythonanywhere.com/barber/info/1/') 
    .then((response) => {
    
        setMydata(response.data)
        //console.log(response.data.images[0])

        // console.log("************** The id is **************** ", id)
        setServicefront(response.data.categories) 
    }).catch(err=> console.log(err))
    },[])
    useEffect(() => {
      console.log(servicefront)
    },[servicefront])
    const submitCards = async (cardIds, barberId, selectedTime) => {
      try {
        const response = await axios.post('/your-endpoint', { cardIds, barberId, selectedTime });
        console.log('POST request successful:', response.data);
      } catch (error) {
        console.error('POST request failed:', error);
      }
    }
  const [selectedCards, setSelectedCards] = useState([]);
  const [error, setError] = useState(null);
    
  const handleCardSelection = (card) => {
        if (selectedCards.length < 3) {
          setSelectedCards([...selectedCards, card]);
        } else {
          setError('You can only book up to 3 times!');
        }
      };
  const handleCardRemoval = (card) => {
        setSelectedCards((prevSelectedCards) => {
          const index = prevSelectedCards.findIndex(
            (selectedCard) => selectedCard.name === card.name
          );
          if (index !== -1) {
            return [
              ...prevSelectedCards.slice(0, index),
              ...prevSelectedCards.slice(index + 1),
            ];
          }
          return prevSelectedCards;
        });
      };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
        setOpen(true);
      };
    
  const handleClose = () => {
        setOpen(false);
      };    
  const totalPrice = selectedCards.reduce((total, card) => total + card.price, 0);
  const times = [];
  for (let i = 9; i <= 21; i += 2) {
    times.push(`${i}:00`);
  }
  const [selectedTime, setSelectedTime] = React.useState('');

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
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
        <div className='count'>{selectedCards.length} </div> 
        {/* {error && <Alert className='er'> {error} </Alert>} */}
        <Snackbar open={Boolean(error)} message={error} severity="error" />;
        <div> 
          <img style={{ width: 200, 
                height: 200, marginLeft:3,position: 'relative',border:"dotted"   ,borderColor: "#120c1e", borderWidth:3,
                zIndex: '3',marginBottom:10,  marginTop:-100,
           borderRadius: 130,}} src="https://s2.uupload.ir/files/348ad8c26d7ff7b6c23fe3e30f3e44dd_ducd.jpg" alt="React lost" />
           <LocalGroceryStoreIcon style={{color:'#ffecee', fontSize:45, marginTop:-300,marginBottom:95,marginLeft:5}} ></LocalGroceryStoreIcon> 
        <div/> 
        

      <Container fixed>
      <Typography component="div">
      <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'rgba(248, 220, 220, 0.35)', width: 400,borderRadius:3,
        height: 80,textAlign: 'center', ml: 48,fontSize: 30, mb:10, fontFamily: 'Roboto, ' ,pt:4, color:'#ffecee'}}>
        {data.BarberShop}
      </Box>
      </ThemeProvider>
    </Typography>
    </Container>
    <div>
    <Tabs value={currentTabIndex}  onChange={handleTabChange} Sx={{p:3, backgroundcolor :'red'}} centered>
      {servicefront.map((item, index) => (
        <Tab key={item.category} label={item.category} />
      ))}
    </Tabs>
    {servicefront.map((item, index) => (
      <div key={item.category} style={{ display: currentTabIndex === index ? 'block' : 'none' }}>
        {item.categoryServices.map((x) => (
          <Grid item md={9}>
          <Grid >
          <Grid item  xs={12} sm={6} md={4} key={x.service}>
            <Card sx={{ maxWidth: 345, bgcolor: '#ffecee', fontFamily: 'Roboto', color: '#120c1e', borderRadius: 3 }}>
              <CardMedia sx={{ height: 140 }} image="https://s2.uupload.ir/files/a9d966e052bdeb38027ca58ac3217845_z5j6.jpg" title="Hair style" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {x.service}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {x.price}$
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleCardSelection({ name: x.service, price: x.price })}>Book</Button>
                <Button onClick={() => handleCardRemoval({ name: x.service, price: x.price })}>Remove</Button>
              </CardActions>
            </Card>
          </Grid>
          </Grid>
          </Grid>
        ))}
      </div>
    ))}
  </div>

          <div>
          <button className='bt' onClick={handleClickOpen}>Order</button>
          <Dialog open={open} onClose={handleClose} sx={{ '& .MuiPaper-root': { borderRadius: '16px' } }}>
            <Box sx={{ p: 7,bgcolor: '#ffecee',width: 300,height:400 }}>
              <Typography variant="h6" color='#120c1e' padding={2} border={5} borderColor={'#120c1e'} borderRadius={2} marginBottom={3}>Selected Cards: </Typography>
              {selectedCards.map((card) => (
                <Typography  color='#120c1e'  key={card.name} >{card.name} {card.price}</Typography>
                
              ))}
              <Typography variant="h6"color='#120c1e' padding={2} marginTop={2}  marginBottom={2}  border={5} borderColor={'#120c1e'} borderRadius={2}>
                Total Price: ${totalPrice}</Typography>
              <Select        sx={{
        width: 300,
        height: 40,
        backgroundColor:'#120c1e',
        border: "1px solid darkgrey",
        color: "#ffecee",
        "& .MuiSvgIcon-root": {
          color: "white",
        },

      }}           value={selectedTime} onChange={handleTimeChange}>
                {times.map((time) => (
                  <MenuItem key={time} value={time}sx={{  backgroundColor: '#120c1e',
                  color: '#382b49',
                  '&:hover': {
                    backgroundColor: '#fdccc8',
                  }}}>
                    {time}
                  </MenuItem>
                ))}
              </Select>
              <Button sx={{ backgroundColor: '#120c1e'  , color: 'white',marginTop:3,width:300,padding:2 }}onClick={null}>BUY</Button>
              {/* <Button onClick={() => submitCards(selectedCards.map(card => card.id))}>Submit Cards</Button> */}
              <Button onClick={() => submitCards(selectedCards.map(card => card.id), id)}>Submit Cards</Button>
              {/* <Button onClick={() => submitCards(selectedCards.map(card => card.id), id, selectedTime)}>Submit Cards</Button> */}
            </Box>
          </Dialog>
        </div>






    <Container fixed>
      <Typography component="div">
      <Box sx={{ bgcolor: '#ffecee', width: 500,
        height: 50,textAlign: 'left', ml: 80 ,fontSize: 30, mt:20,mb:-25,fontFamily:'Roboto',p: 3 , color:'#120c1e',borderRadius:3}}>
    you are beautiful cause you care.
      </Box>
    </Typography>
    </Container>
    <Container fixed>
      <div>
          <img style={{ width: 560,
        height: 500, marginLeft:-50,
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
      <Box sx={{ width: '125%',ml:-18,pb:3}}>
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
