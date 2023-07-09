import React, { useEffect } from "react";
import { useState } from "react";
import { Link }from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Rating } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
import PropTypes from 'prop-types';


function SalonCard({id,name,address,phoneNumber,rate,background,logo}){

  const theme = createTheme({
    palette: {
      primary: {
        main:"#AC3B61" ,
      }
    },
  });
  
  return(
    <Card sx={{backgroundColor : "#EDC7B7" , color : "#123C69"}}>
      <CardHeader
        avatar = { 
          <Avatar>
            <img src={logo} alt="profile"/>
          </Avatar>
        }
        title={name}
        subheader={<Rating value={rate} readOnly/>}
      />
      <CardMedia
        component="img"
        height="155"
        image={background}
        alt="salon"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <p><PhoneIcon/>{phoneNumber}</p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p><HomeIcon/>{address}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <ThemeProvider theme={theme}>
          <Button variant="contained" size="small" href={`/SalonPage/${id}`} endIcon={<ArrowForwardIcon/>}>Visit</Button>
        </ThemeProvider>
      </CardActions>
    </Card>
    // <div className="h-[390px] m-2 bg-DesertSand-500 rounded-lg shadow">
    //     <div className="relative">
    //       <Link to={`/SalonPage/${id}`}>
    //           <img className="w-full h-[155px] rounded-t-lg object-cover" src={background} alt="salon page" />
    //       </Link>
    //       <div className="justify-items-center -mt-11 grid grid-cols-3">
    //         <div></div>
    //         <div className="flex justify-center items-center w-[90px] h-[90px] overflow-hidden">
    //           <img className=" w-[81px] h-[81px] border-2 border-BlackShadows-500 rounded-full" src={logo} alt="profile" />
    //         </div>
    //         <div></div>
    //       </div>
    //     </div>
    //     <div className="p-3">
    //         <Link to={`/SalonPage/${id}`}>
    //             <h5 className="text-left mb-2 text-2xl font-bold tracking-tight text-AteneoBlue-500">{name}</h5>
    //         </Link>
    //         <p className="text-left mb-3 font-normal text-AteneoBlue-500 ">{address}</p>
    //         <p className="text-left mb-3 font-normal text-AteneoBlue-500">{phoneNumber}</p>
    //         <div className="flex justify-between">
    //           <div className="flex items-center">
    //             <svg aria-hidden="true" className="w-5 h-5 text-BlackShadows-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    //             <p className="ml-2 text-sm font-bold text-AteneoBlue-500">{rate}</p>
    //           </div>
    //           <Link to={`/SalonPage/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-MediumRuby-500 rounded-lg hover:bg-MediumRuby-400 focus:ring-2 focus:outline-none focus:ring-MediumRuby-600">
    //               visit
    //               <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    //           </Link>
    //         </div>
    //     </div>
    // </div>
  );
}

export default SalonCard;