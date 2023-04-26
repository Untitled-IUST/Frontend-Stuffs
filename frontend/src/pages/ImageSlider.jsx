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
  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };
  
  const[data,setMydata]=useState('')
  const[img,setImg]=useState(0)
  const[img1,setImg1]=useState(0)
  const[service, setService] = useState(0) 
  let { id } = useParams();
  useEffect(()=> {
  //axios.get(`https://amirmohammadkomijani.pythonanywhere.com/barber/info/${props.id}/`)
  axios.get('https://amirmohammadkomijani.pythonanywhere.com/barber/info/1/') 
    .then((response) => {
    
        setMydata(response.data)
        //console.log(data.images[0].background)

        console.log("************** The id is **************** ", id)
        // setImg(data.images[0].logo)
        // setImg1(data.images[0].background)
        // setService(data.services[0].service) 
        // console.log(data.services[0].service)
    }).catch(err=> console.log(err))
    },[])


  const [selectedCards, setSelectedCards] = useState([]);
  const [error, setError] = useState(null);
    
  const handleCardSelection = (card) => {
        if (selectedCards.length < 3) {
          setSelectedCards([...selectedCards, card]);
        } else {
          setError('You can only book up to 3 times!');
        }
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
        <div> 
           <img style={{ width: 200, 
                height: 200, marginLeft:3,position: 'relative',border:"dotted"   ,borderColor: "#120c1e", borderWidth:3,
                zIndex: '3',marginBottom:50,  marginTop:-400,
           borderRadius: 130,}} src="https://s2.uupload.ir/files/348ad8c26d7ff7b6c23fe3e30f3e44dd_ducd.jpg" alt="React lost" />
           <LocalGroceryStoreIcon style={{color:'#ffecee', fontSize:45, marginTop:-300,marginBottom:95,marginLeft:5}} ></LocalGroceryStoreIcon> 
        <div/> 
        

      <Container fixed>
      <Typography component="div">
      <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'rgba(248, 220, 220, 0.35)', width: 400,borderRadius:3,
        height: 80,textAlign: 'center', ml: 48,mt:-20,fontSize: 30, mb:30, fontFamily: 'Roboto, ' ,pt:4, color:'#ffecee'}}>
        Name of salon {data.BarberShop}
      </Box>
      </ThemeProvider>
    </Typography>
    </Container>
    
    <React.Fragment>
      <Tabs value={currentTabIndex} onChange={handleTabChange}  sx={{ p: 3,bgcolor:'rgba(248, 220, 220, 0.35)',fontFamily:'Roboto', color:'#120c1e' }}centered>
        <Tab label={data.services[0].category}/> 
        <Tab label='Makeup' />
        <Tab label='Skin' />
      </Tabs>
      {error && <p className='er'>{error}</p>}  
      {/* TAB 1 Contents */}
      {currentTabIndex === 0 && (
        <Box sx={{ p: 3 }}>
    <Grid container spacing={2}>
      {/* First card */}
      <Grid item xs={12} sm={2}>
      <Card sx={{ maxWidth: 345,bgcolor: '#ffecee',fontFamily:'Roboto', color:'#120c1e',borderRadius:3 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://s2.uupload.ir/files/a9d966e052bdeb38027ca58ac3217845_z5j6.jpg"
        title="Hair style"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Chignon
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Price: $50
        </Typography>

      </CardContent>
      <CardActions>
      <Button onClick={() => handleCardSelection({ name: 'Chignon', price: 50 })}>Book</Button>
      </CardActions>
      
    </Card>
      </Grid>

      {/* Second card */}
      <Grid item xs={12} sm={2}>
      <Card sx={{ maxWidth: 345,bgcolor: '#ffecee',fontFamily:'Roboto', color:'#120c1e',borderRadius:3 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://s2.uupload.ir/files/a9d966e052bdeb38027ca58ac3217845_z5j6.jpg"
        title="Hair Style"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Haircut
        </Typography>
        <Typography variant="body2" color="text.secondary">

        Price: $40
        </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={() => handleCardSelection({ name: 'Haircut', price: 40 })}> Book </Button>
      </CardActions>
    </Card>
      </Grid>
            {/* Second card */}
            <Grid item xs={12} sm={2}>
            <Card sx={{ maxWidth: 345,bgcolor: '#ffecee',fontFamily:'Roboto', color:'#120c1e',borderRadius:3 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://s2.uupload.ir/files/a9d966e052bdeb38027ca58ac3217845_z5j6.jpg"
        title="Hair Style"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Dye Hair
        </Typography>
        <Typography variant="body2" color="text.secondary">

        Price: $20
        </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={() => handleCardSelection({ name: 'Dye Hair', price: 20 })}> Book </Button>
      </CardActions>
    </Card>
      </Grid>

      {/* Add more cards here as needed */}
    </Grid>
        </Box>
      )}

      {/* TAB 2 Contents */}
      {currentTabIndex === 1 && (
        <Box sx={{ p: 3 }}>
    <Grid container spacing={2}>
      {/* First card */}
      <Grid item xs={12} sm={2}>
      <Card sx={{ maxWidth: 345,bgcolor: '#ffecee',fontFamily:'Roboto', color:'#120c1e',borderRadius:3 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://s2.uupload.ir/files/10a8fc806c5eaceb72877fa762e204e1_xg74.jpg"
        title="Hair style"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Face Makeup
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        Price: $25
        </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={() => handleCardSelection({ name: 'Face Makeup', price: 25 })}> Book </Button>

      </CardActions>
    </Card>
      </Grid>

      {/* Second card */}
      <Grid item xs={12} sm={2}>
      <Card sx={{ maxWidth: 345,bgcolor: '#ffecee',fontFamily:'Roboto', color:'#120c1e',borderRadius:3 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://s2.uupload.ir/files/10a8fc806c5eaceb72877fa762e204e1_xg74.jpg"
        title="Hair Style"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Wedding Makeup
        </Typography>
        <Typography variant="body2" color="text.secondary">

      Price: $60
        </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={() => handleCardSelection({ name: 'Wedding Makeup', price: 60 })}> Book </Button>
      </CardActions>
    </Card>
      </Grid>
            {/* Second card */}
            <Grid item xs={12} sm={2}>
            <Card sx={{ maxWidth: 345,bgcolor: '#ffecee',fontFamily:'Roboto', color:'#120c1e',borderRadius:3 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://s2.uupload.ir/files/10a8fc806c5eaceb72877fa762e204e1_xg74.jpg"
        title="Hair Style"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        IDK Makeup
        </Typography>
        <Typography variant="body2" color="text.secondary">

        Price: $23
        </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={() => handleCardSelection({ name: 'IDK Makeup', price: 23 })}> Book </Button>
      </CardActions>
    </Card>
      </Grid>

      {/* Add more cards here as needed */}
    </Grid>
        </Box>
      )}

      {/* TAB 3 Contents */}
      {currentTabIndex === 2 && (
        <Box sx={{ p: 3 }}>
    <Grid container spacing={2}>
      {/* First card */}
      <Grid item xs={12} sm={2}>
      <Card sx={{ maxWidth: 345,bgcolor: '#ffecee',fontFamily:'Roboto', color:'#120c1e',borderRadius:3 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://s2.uupload.ir/files/664f5bc68654b7629090d294fc6b61b5_efq0.jpg"
        title="Hair style"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Skin Care
        </Typography>
        <Typography variant="body2" color="text.secondary">

        Price: $21
        </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={() => handleCardSelection({ name: 'Skin care', price: 21 })}> Book </Button>
      </CardActions>
    </Card>
      </Grid>

      {/* Second card */}
      <Grid item xs={12} sm={2}>
      <Card sx={{ maxWidth: 345,bgcolor: '#ffecee',fontFamily:'Roboto', color:'#120c1e',borderRadius:3 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://s2.uupload.ir/files/664f5bc68654b7629090d294fc6b61b5_efq0.jpg"
        title="Hair Style"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Skin IDK
        </Typography>
        <Typography variant="body2" color="text.secondary">

   
        Price: $28
        </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={() => handleCardSelection({ name: 'Skin IDK', price: 28 })}> Book </Button>
      </CardActions>
    </Card>
      </Grid>
            {/* Second card */}
            <Grid item xs={12} sm={2}>
            <Card sx={{ maxWidth: 345,bgcolor: '#ffecee',fontFamily:'Roboto', color:'#120c1e',borderRadius:3 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://s2.uupload.ir/files/664f5bc68654b7629090d294fc6b61b5_efq0.jpg"
        title="Hair Style"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Skin IDK
        </Typography>
        <Typography variant="body2" color="text.secondary">

        Price: $29
        </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={() => handleCardSelection({ name: 'Skin IDK', price: 29 })}> Book </Button>

      </CardActions>
    </Card>
      </Grid>

      {/* Add more cards here as needed */}
    </Grid>
        </Box>
      )}
    </React.Fragment>


    {/* {error && (
        <Box sx={{ p: 3 }}>
          <Typography color="error">{error}</Typography>
        </Box>
      )} */}

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
            </Box>
          </Dialog>
        </div>






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
