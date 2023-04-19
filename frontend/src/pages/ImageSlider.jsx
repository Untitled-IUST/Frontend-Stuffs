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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

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
      <Tabs value={currentTabIndex} onChange={handleTabChange}  sx={{ p: 3,bgcolor:'rgba(248, 220, 220, 0.35)',fontFamily:'Roboto', color:'#120c1e' }}centered>
        <Tab label='Hair'/>
        <Tab label='Makeup' />
        <Tab label='Skin' />
      </Tabs>

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
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
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

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
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
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
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
        Chignon
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
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
        Haircut
        </Typography>
        <Typography variant="body2" color="text.secondary">

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
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
        Dye Hair
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
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
        Chignon
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
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
        Haircut
        </Typography>
        <Typography variant="body2" color="text.secondary">

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
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
        Dye Hair
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>
      </Grid>

      {/* Add more cards here as needed */}
    </Grid>
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