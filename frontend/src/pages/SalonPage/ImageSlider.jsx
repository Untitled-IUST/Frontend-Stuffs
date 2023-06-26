
import React, { useState,useEffect, useRef , useContext } from 'react';
import { SliderData } from '../../Components/SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Rating from '@mui/material/Rating';
import QRCode from 'react-qr-code';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
}from "react-router-dom";
import ReactCrop from 'react-image-crop';
import Box from '@mui/material/Box';
import UserProfileContext from './UserProfileContext';
import { Comment, Form } from 'semantic-ui-react'
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import"./css/ImageSlider.css";
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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Navigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import cn from "classnames";
import "./styles.css";
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider} from '@mui/material';



let access_token =localStorage.getItem('accessTokenCustomer');
const INITIAL_HEIGHT = 46;


function ImageSlider ({ slides }) {
  // const { hasEditedProfile } = useContext(UserProfileContext);
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [value, setValue] = useState(0);
  const length = slides.length;
  const [count, setCount] = useState(() => {
    const savedData = localStorage.getItem('count');
    return savedData ? JSON.parse(savedData) : 0;
  });
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
    // localStorage.removeItem('count', JSON.stringify(count));

  }, [count]);

console.log(access_token)
  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto',
    },
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#edc7b7',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'left',
    color: '#ac3b61',
    fontFamily: 'Roboto, ',
    fontSize:  25,
    borderRadius:10,
  }));
  

const StyledMenuItem = styled(MenuItem)({
  backgroundColor: 'red',
  color: 'white',
  '&:hover': {
    backgroundColor: 'red',
  },
});
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleTabChange = (event, newIndex) => {
    setCurrentTabIndex(newIndex);
  };



  const[data,setMydata]=useState('')
  const[des,setDes]=useState('')
  const[barbimg,setBarbimg]=useState()
  const[title,setTitle]=useState('')
  const[idbarb,setIdbarb]=useState('')

  const[servicefront, setServicefront] = useState([]) 
  const times = [];
  for (let i = 9; i <= 21; i += 1) {
    const hour = i.toString().padStart(2, '0');
    times.push(`${hour}:00:00`);
  }
  const [selectedTime, setSelectedTime] = React.useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCards, setSelectedCards] = useState(() => {
  const savedData = localStorage.getItem('selectedCards');
    return savedData ? JSON.parse(savedData) : [];
  });
  useEffect(() => {
    localStorage.setItem('selectedCards', JSON.stringify(selectedCards));
    // localStorage.removeItem('selectedCards', JSON.stringify(selectedCards));
  }, [selectedCards]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  let { id } = useParams();

  useEffect(()=> {
  //axios.get(`https://amirmohammadkomijani.pythonanywhere.com/barber/info/${props.id}/`)
  // axios.get('https://amirmohammadkomijani.pythonanywhere.com/barber/info/1/') 
  axios.get(`https://amirmohammadkomijani.pythonanywhere.com/barber/info/${id}/`, {
    headers: {
      'Authorization': `JWT ${access_token}`,
      'Content-Type': 'application/json',
    }
  })
  .then((response) => {
    setMydata(response.data)
    setIdbarb(response.data.id)
    setValue(response.data.customers_rate)
    setServicefront(response.data.categories) 
  })
  .catch(err => console.log(err))
  
    },[])
    const sendRating = async (value) => {
      try {
        const response = await axios.post(
          `https://amirmohammadkomijani.pythonanywhere.com/barber/info/${id}/rate/`,
          { rating: value },
          {
            headers: {
              'Authorization': `JWT ${access_token}`,
              'Content-Type': 'application/json',
            }
          }
        );
        console.log(response.data);
        axios.get(`https://amirmohammadkomijani.pythonanywhere.com/barber/info/${id}/`, {
          headers: {
            'Authorization': `JWT ${access_token}`,
            'Content-Type': 'application/json',
          }
        })
        .then((response) => {
          setValue(response.data.customers_rate)
          console.log("got it darling for rate", value)
        })
        .catch(err => console.log(err))
    
      } catch (error) {
        console.error(error);
      }
    }
    

    // useEffect(() => {
    //   console.log(access_token)
    //   axios.get('https://amirmohammadkomijani.pythonanywhere.com/barber/description/', {
    //     headers: {
    //       'Authorization': `JWT ${access_token}`,
    //       'Content-Type': 'application/json',
    //     }
    //   })
    //     .then((response) => {
    //       setDes(response.data.results[0].description);
    //       setTitle(response.data.results[0].title)
    //       setBarbimg(response.data.results[0].img)
    //       console.log('picofbarb',barbimg)
    //       console.log('here',des);
    //     })
    //     .catch(err => console.log(err));
    // }, []);
    useEffect(() => {
      fetchComments();
    }, []);
    
    const fetchComments = () => {
      axios.get(`https://amirmohammadkomijani.pythonanywhere.com/barber/info/${id}/`, {
        headers: {
          'Authorization': `JWT ${access_token}`,
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        setComments(response.data.comments);
        setVisibleComments(response.data.comments.slice(0, 3));
        setDes(response.data.barberDesc[0].description);
        setTitle(response.data.barberDesc[0].title)
        setBarbimg(response.data.barberDesc[0].img)
      })
      .catch(error => {
        console.error(error);
      });
    };
    

    
    
    useEffect(() => {
      console.log(servicefront)
    },[servicefront])
    console.log('Selected cards:', selectedCards);
    const submitCards = async ( cardIds, barberId,selectedTime,selectedDate,) => {
      try {
        // const cardId = cardIds[0];
        let timeIndex = 0;
        for (const cardId of cardIds) {
        console.log('Selected time:', selectedTime);
        console.log('Selected date:', selectedDate);
        // const timeString = times[timeIndex];
        const dateObject = selectedDate.toDate();
        const dateString = dateObject.toISOString().split('T')[0];
        const time = new Date(`${dateString}T${selectedTime}`);
        time.setHours(time.getHours() + timeIndex);
        const formattedTime = time.toTimeString().split(' ')[0];

        const formattedDate = selectedDate.format('YYYY-MM-DD');
        console.log('well',formattedTime);
        console.log(formattedDate);
        

        const response = await axios.post('https://amirmohammadkomijani.pythonanywhere.com/barber/order/', { service:cardId , barber:barberId, time: formattedTime, date:formattedDate}, {
          headers: {
            'Authorization': `JWT ${access_token}`,
            'Content-Type': 'application/json',
          },
        });
        console.log('POST request successful:', response.data);
        timeIndex++;
        navigate('/ShoppingCart');
      }
      } catch (error) {
        console.error('POST request failed:', error);
        alert(`You  Cant Reserve This Time.`);
      }
    }
  
    // const submitCards = async (cardIds, barberId, selectedTime, selectedDate) => {
    //   try {
    //     // Loop through the cardIds array and send a separate POST request for each id value
    //     for (const cardId of cardIds) {
    //       const response = await axios.post('https://amirmohammadkomijani.pythonanywhere.com/barber/order/', { service: cardId, barber: barberId, time: selectedTime, Date: selectedDate }, {
    //         headers: {
    //           'Authorization': `JWT ${access_token}`,
    //           'Content-Type': 'application/json',
    //         },
    //       });
    //       console.log('POST request successful:', response.data);
    //     }
    //   } catch (error) {
    //     console.error('POST request failed:', error);
    //   }
    // }

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
  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };  

  const handleClickOpen = () => {
        setOpen(true);
      };
    
  const handleClose = () => {
        setOpen(false);
      };    
  const totalPrice = selectedCards.reduce((total, card) => total + card.price, 0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [comments, setComments] = useState([]);
  const [visibleComments, setVisibleComments] = useState([]);
  const [commentCount, setCommentCount] = useState({});
  const [replyIndex, setReplyIndex] = useState(-1);

  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const onExpand = () => {
    if (!isExpanded) {
  outerHeight.current = containerRef.current.scrollHeight;
  setIsExpanded(true);
}
}
const onChange = (e) => {
    setCommentValue(e.target.value);
	}
const onClose = () => {
        setCommentValue("");
        setIsExpanded(false);
      };

      const onSubmit = (event) => {
        event.preventDefault();
        // if (!hasEditedProfile) {
        //   alert('You must edit your profile before submitting a comment.');
        //   return;
        // }
        if (commentCount[idbarb] >= 5) {
          alert(`You have reached the maximum number of ${5} comments for this barber.`);
          return;
        }
      
        axios.post('https://amirmohammadkomijani.pythonanywhere.com/barber/comments/create/', { barber: idbarb, body: commentValue }, {
          headers: {
            'Authorization': `JWT ${access_token}`,
            'Content-Type': 'application/json',
          },
        })
          .then(response => {
            // Fetch updated comments
            console.log("post it darling",response.data)
            fetchComments();
            setCommentCount({
              ...commentCount,
              [idbarb]: (commentCount[idbarb] || 0) + 1
            });
          })
          .catch(error => {
            console.error(error);
          });
      
        setCommentValue('');
      };
      
const onReplyClick = (index) => {
        setReplyIndex(index);
      }
          
      const onReplySubmit = (e) => {
        e.preventDefault();
        const replyValue = e.target.elements.reply.value;
        if (replyValue.trim() === "") {
          alert("Please enter a reply.");
          return;
        }
        const newComments = [...comments];
        newComments[replyIndex].replies.push(replyValue);
        setComments(newComments);
        // setVisibleComments(newComments.slice(0, 3));
        setReplyIndex(-1);
        e.target.elements.reply.value = "";
      }
    
      const onCancelClick = () => {
        setReplyIndex(-1);
        document.getElementById(`reply-${replyIndex}`).value = "";
      }
      const onLoadMoreClick = () => {
        setVisibleComments(comments.slice(0, visibleComments.length + 3));
      };
    
    



  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
    console.log('Selected time:', event.target.value);
  }
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
const webAddress = `http://localhost:3000/SalonPage/${id}`;
  




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

        {/* {error && <Alert className='er'> {error} </Alert>} */}
        <Snackbar open={Boolean(error)} message={error} severity="error" />
        <div> 
          <img  className='lg' style={{ width: 200, 
                height: 200, marginLeft:'1%' ,position: 'relative' ,borderColor:'#ffecee' ,border:"dotted", borderWidth:3,
                zIndex: '3',  marginTop:'-30%',marginBottom:'1%',
           borderRadius: 130,}} src="https://s2.uupload.ir/files/348ad8c26d7ff7b6c23fe3e30f3e44dd_ducd.jpg" alt="React lost" />
           {/* <LocalGroceryStoreIcon  style={{color:'#ffecee', fontSize:45, marginTop:'-30%',marginBottom:'10%',marginLeft:5}} ></LocalGroceryStoreIcon>  */}
           <QRCode value={webAddress}        style={{ height: 'auto', width: '5%', marginLeft:'5.5%' ,backgroundColor:'#ac3b61',color:'#ac3b61' }}/>
        <div/>
        <div>
        <Box       sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },}}>

              <div>
              <Button className='ac' onClick={handleClickOpen1}>
                <Badge color="secondary" badgeContent={count}>
                <ShoppingCartIcon sx={{fontSize:45,color:"#ac3b61"}} />
                </Badge>
                </Button>
                <Dialog open={open1} onClose={handleClose1} sx={{ '& .MuiPaper-root': { borderRadius: '16px' } }}>
              <Box sx={{ p: 4,bgcolor: '#edc7b7',width: 300 }}>
              <Typography variant="h6" color='#123c69' padding={2} border={5 } borderColor={'#123c69'} borderRadius={2}  border = {'dashed'} marginBottom={3}>Selected Cards: </Typography>
              {selectedCards.map((card) => (
                <Typography  color='#123c69'  key={card.name} >{card.name} {card.price}$</Typography>
                
              ))}
              <Typography variant="h6"color='#ac3b61' padding={2} marginTop={2}  marginBottom={2}  border={5} borderColor={'#ac3b61'} border = {'dashed'}  borderRadius={2}>
                Total Price: ${totalPrice}</Typography>
                </Box>
                </Dialog>
                

              </div>
      </Box>
      </div>
        

      <Container fixed>
      <Typography component="div">
      <ThemeProvider theme={theme}>
      <div className='ti'>
      <Box  className='ti1' sx={{ bgcolor: '#edc7b7', width: '40%',borderRadius:3,
        height: 80,fontSize: 30,textAlign:'center',mt:'-9.5%', mb:'10%',pt:'1%', fontFamily: 'Roboto, ' , color:"#ac3b61",}}>
        {data.BarberShop}
      </Box>
      </div>
      </ThemeProvider>
    </Typography>
    </Container>

    <div>
    <Tabs  className='mn' value={currentTabIndex}  onChange={handleTabChange}  centered>
      {servicefront.map((item, index) => (
        <Tab  key={item.category} label={item.category} />
      ))}
    </Tabs>
    {servicefront.map((item, index) => (
      // <div  className='asghar'  key={item.category} style={{ display: currentTabIndex === index ? 'flex' : 'none' }}>
      <div
      key={item.category}
      className={currentTabIndex === index ? 'asghar' : ''}
      style={{ display: currentTabIndex === index ? 'flex' : 'none' }}
    >
        {item.categoryServices.map((x) => (

          <div  className="card"  key={x.service}>
            <Card   >
            <CardMedia
  sx={{ height: 140 }}
  image={x.servicePic ? x.servicePic : "https://s2.uupload.ir/files/a9d966e052bdeb38027ca58ac3217845_z5j6.jpg"}
  title="Hair style"
/>
              <CardContent>
                <Typography className='c1' gutterBottom variant="h5" component="div">
                  {x.service}
                </Typography>
                <Typography className='c2'  variant="body2" color="text.secondary">
                  {x.price}$
                </Typography>
              </CardContent>
              <CardActions>
              <ButtonGroup>
                  <Button
                    aria-label="reduce"
                    onClick={() => {  handleCardRemoval({id: x.id, name: x.service, price: x.price })
                      setCount(Math.max(count - 1, 0));
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Button
                    aria-label="increase"
                    onClick={() => { handleCardSelection({id: x.id, name: x.service, price: x.price })
                      setCount(Math.min(count + 1, 3));
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
                {/* <Button className='ab'  onClick={() => handleCardSelection({id: x.id, name: x.service, price: x.price })}>Book</Button>
                <Button  className='ab'onClick={() => handleCardRemoval({id: x.id, name: x.service, price: x.price })}>Remove</Button> */}
              </CardActions>
            </Card>
          </div>
  

        ))}
      </div>
    ))}
  </div>


          <div className='bt1984'>
          <button className='bt' onClick={handleClickOpen}>Order</button>
          <Dialog open={open} onClose={handleClose} sx={{ '& .MuiPaper-root': { borderRadius: '16px'  } }}>
            <Box sx={{ p: 5,bgcolor: '#edc7b7' }}>
              {/* <Typography variant="h6" color='#120c1e' padding={2} border={5} borderColor={'#120c1e'} borderRadius={2} marginBottom={3}>Selected Cards: </Typography>
              {selectedCards.map((card) => (
                <Typography  color='#120c1e'  key={card.name} >{card.name} {card.price}</Typography>
                
              ))}
              <Typography variant="h6"color='#120c1e' padding={2} marginTop={2}  marginBottom={2}  border={5} borderColor={'#120c1e'} borderRadius={2}>
                Total Price: ${totalPrice}</Typography> */}
              <Select
                displayEmpty
                sx={{
                  width: "70%",
                  backgroundColor: "#ac3b61",
                  border: "1px solid darkgrey",
                  color: "#ffecee",
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
                value={selectedTime}
                onChange={handleTimeChange}
              >
                <MenuItem style={{backgroundColor:"#ac3b61"}} value="">
                  <em >Choose a time</em>
                </MenuItem>
                {times.map((time) => (
                  <MenuItem
                    key={time}
                    value={time}
                    sx={{
                      backgroundColor: time === selectedTime ? "#edc7b7" : "#ac3b61",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#fdccc8",
                      },
                    }}
                  >
                    {time}
                  </MenuItem>
                ))}
              </Select>
              <LocalizationProvider dateAdapter={AdapterDayjs}  className="bl">
                <DatePicker minDate={dayjs()} onChange={handleDateChange} />
              </LocalizationProvider>
              {/* <Button sx={{ backgroundColor: '#120c1e'  , color: 'white',marginTop:3,width:'50%',padding:2 }}onClick={null}>BUY</Button> */}
              {/* <Button onClick={() => submitCards(selectedCards.map(card => card.id))}>Submit Cards</Button> */}
              <Button sx={{ backgroundColor: '#ac3b61'  , color: '#edc7b7',marginTop:3,width:'70%',padding:2 }}o onClick={() => submitCards(selectedCards.map(card => card.id), id,selectedTime, selectedDate)}>Submit Cards</Button>
              {/* <Button onClick={() => submitCards( selectedTime, selectedDate)}>Submit Cards</Button> */}
            </Box>
          </Dialog>
        </div>






    <Container fixed>
      <Typography component="div">
      <Box  className='dis' sx={{ bgcolor: '#123c69', width: '45%',
        height: 70,textAlign: 'left', ml: '55%',fontSize: 25, mt:'15%' ,mb:-15.7,fontFamily:'Roboto, ',pt:1,pr:3,pl:3 , color:'#edc7b7',borderRadius:3}}>
          {title}
      </Box>
    </Typography>
    </Container>
    <Container fixed>
      <div>
          {/* <img className='imdis' style={{ width: '44%',
        height: 450, marginLeft:'-.5%',
        marginTop:'5%',
          borderRadius: 10,}} src={ barbimg ?barbimg : "https://s2.uupload.ir/files/studio_benicky_salon_design.jpeg_parj.jpg"}alt="React lost" />
           */}
           <img
          className='imdis'
          style={{ width: '44%', height: 450, marginLeft:'-.5%', marginTop:'5%', borderRadius: 10 }}
          src={barbimg}
          alt="React lost"
          onError={(e) => { e.target.src = "https://s2.uupload.ir/files/studio_benicky_salon_design.jpeg_parj.jpg"; }} />


        </div>

    <Typography component="div">
      
      <Box  className='dis1' sx={{ bgcolor: '#edc7b7', width:'45%',
        height: 317,textAlign: 'left', ml: '55%' ,mt:-40,fontSize: 25, mb:15,fontFamily:'Roboto, ',p: 3 , color:'#123c69',borderRadius:3}}>
        {des}
      </Box>
    </Typography>
    </Container>

    <Container fixed>
      <Box sx={{ width: '100%',pb:3,marginBottom:5}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 15 }}>
          <Grid item xs={6}>
            <Item className='bx'><BrushIcon  style={{ marginLeft:0,marginBottom:-3,color:'#6495ed' ,fontSize:20,
      }}></BrushIcon> Owner: {data.Owner}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item className='bx'><FmdGoodIcon style={{ marginLeft:0,marginBottom:-3,color:'#800000',fontSize:20,
      }} ></FmdGoodIcon> Address: {data.address} </Item>
          </Grid>
          <Grid item xs={6}>
            <Item className='bx'><CallIcon style={{ marginLeft:0,marginBottom:-5,color:'#004600',fontSize:20,
      }}></CallIcon> Phone Number: {data.phone_Number} </Item>
          </Grid>
          <Grid item xs={6}>
            <Item className='bx'><GradeIcon style={{ marginLeft:0,marginBottom:-6,color:'#fec20c',fontSize:25,
      }}></GradeIcon>Rate: {data.rate}</Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
    <div className='rtdiv'>
    <Typography  className='rtty'>Rate To This Shop</Typography>
                        <Box
                          sx={{
                            '& > legend': { mt: 2 , }
                          }}
                        >

                          <Rating sx={{textAlign:'center'}}
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                              sendRating(newValue);
                              setValue(newValue);
                
                            }}
                          />

                        </Box>
        </div>
    <div>
    <Box sx={{ width: '100%',pb:3}}>
    <List sx={{ width: '100%', maxWidth: '41.5%',marginBottom:60,bgcolor:'#edc7b7',marginLeft:'3.5%',
        paddingBottom:0,borderRadius:3,boxShadow: '0px 3px 5px 4px rgba(0, 0, 0, 0.4)' }}>
        <Typography sx={{ marginLeft: '15px',fontFamily:'Roboto, ',color:'#ac3b61',fontSize:22 }} >Comments</Typography>
        {visibleComments.map((comment, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="User" src={comment.customer.profile_pic} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {comment.customer.first_name} {comment.customer.last_name}
                    </Typography>
                    <br />
                    {comment.body}
                  </>
                }
                secondary={
                  <>
                    {comment.reply && (
                      <>
                        <br />
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.secondary"
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;Reply:
                        </Typography>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          &nbsp;{comment.reply}
                        </Typography>
                      </>
                    )}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}

        {visibleComments.length < comments.length && (
            <button onClick={onLoadMoreClick} className='bt17'>Load more</button>
          )}
  
                <form
                onSubmit={onSubmit}
                ref={containerRef}
                className={cn("comment-box", {
                  expanded: isExpanded,
                  collapsed: !isExpanded,
                        modified: commentValue.length > 0,
                })}
                style={{
                  minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT
                }}
              >
                <div className="header">
                    <div className="user1">
                        <img
                        src="https://s2.uupload.ir/files/348ad8c26d7ff7b6c23fe3e30f3e44dd_ducd.jpg"
                        alt="User avatar"
                        />
                        <span>User Name</span>
                    </div>
                </div>
                
            <label for="comment" className='cmt'>What are your thoughts?</label>
                    <textarea
                    ref={textRef}
                    onClick={onExpand}
                    onFocus={onExpand}
                    onChange={onChange}
                    className="comment-field"
                    placeholder="What are your thoughts?"
                    value={commentValue}
                    name="comment"
                    id="comment"
                    />
                    <div className="actions">
                        <button type="button" className="cancel" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit"  className='subim' disabled={commentValue.length < 1}>
                            Respond
                        </button>
                    </div>
                    ...
                </form>


        </List>
        </Box>
       
        </div>
      
  </div>
  </div>
  
  
  );
};

export default ImageSlider;