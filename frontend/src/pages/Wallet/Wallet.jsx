
import React, { useState,useEffect } from 'react';
import './css/Wallet.css';
import DenominationItem from './DenominationItem';
import { dList } from './DList';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import axios from 'axios';
// let access_token =localStorage.getItem('accesstokenCustomer');

function CashWithdrawal (){
  const [money, setMoney] = useState('');
  const [customValue, setCustomValue] = useState('');
  const[fname,setFname]=useState('');
  const[lname,setLname]=useState('');
  const[prof,setProf]=useState('');
  const navigate = useNavigate();

  // const stateChange = (value) => {
  //   setMoney((prevState) => prevState + value);
  // };
  const stateChange = (newValue) => {
    setMoney(newValue);
  }  
  // const getCredit = async () => {
  //   try {
  //     const response = await axios.get('https://amirmohammadkomijani.pythonanywhere.com/customer/profile/add_credits/');
  //     setM9oney(response.data.credit);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  useEffect(() => {
    let access_token = localStorage.getItem('accesstokenCustomer');
    console.log(access_token);
    axios.get('https://amirmohammadkomijani.pythonanywhere.com/customer/profile/add_credits/', {
      headers: {
        'Authorization': `JWT ${access_token}`,
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      setMoney(response.data.credit);
      setFname(response.data.first_name)
      setLname(response.data.last_name)
      setProf(response.data.prof)
      console.log("got it darling", money)
    })
    .catch(err => console.log(err))
  }, [])


  const handleButtonClick = (value) => {
    let access_token = localStorage.getItem('accesstokenCustomer');
    console.log(access_token);
    axios.put('https://amirmohammadkomijani.pythonanywhere.com/customer/profile/add_credits/', { credit : value }, {
      headers: {
        'Authorization': `JWT ${access_token}`,
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        // handle success
        navigate('/payment');
        console.log(response);
        axios.get('https://amirmohammadkomijani.pythonanywhere.com/customer/profile/add_credits/', {
            headers: {
              'Authorization': `JWT ${access_token}`,
              'Content-Type': 'application/json',
            }
          })
          .then((response) => {
            setMoney(response.data.credit);
            console.log("got it darling", money)
          })
          .catch(err => console.log(err))
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  const [alert, setAlert] = useState(null);
  const handleCustomValueChange = (event) => {
    let value = event.target.value;
    if (value < 0) {
      value = 0;
      setAlert(
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error">This is an error alert — check it out!</Alert>
        </Stack>
      );
    } else {
      setAlert(null);
    }
    setCustomValue(value);
  }
  
  const handleCustomValueSubmit = () => {
    if (customValue) {
      let access_token = localStorage.getItem('accesstokenCustomer');
      console.log(access_token);
      axios.put('https://amirmohammadkomijani.pythonanywhere.com/customer/profile/add_credits/', { credit: parseInt(customValue) }, {
        headers: {
          'Authorization': `JWT ${access_token}`,
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        // handle success
        navigate('/payment');
        console.log(response);
        axios.get('https://amirmohammadkomijani.pythonanywhere.com/customer/profile/add_credits/', {
            headers: {
              'Authorization': `JWT ${access_token}`,
              'Content-Type': 'application/json',
            }
          })
          .then((response) => {
            setMoney(response.data.credit);
            console.log("got it darling", money)
          })
          .catch(err => console.log(err))
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  }
  
console.log(fname)
  return (
    <div className="main-container">
      <div className="inner-container">
            
            <div className='prp'>
            <div className="heading-container">
              <img src={prof ? prof :"https://s2.uupload.ir/files/348ad8c26d7ff7b6c23fe3e30f3e44dd_ducd.jpg"} alt='user image' className='pmr' />
              <p className="name-para">{fname} {lname}</p>
            </div>
            <div className="money-container">
              <p className="balance-name">Your Balance</p>
              <div className="balance-holder">
                <p className="amount">{money}</p>
              </div>
              </div>
        </div>
        <p className="withdraw">Add Money</p>


        <ul className="items-holder">
          {dList.map(
            (eachObject) => (
              <DenominationItem
                key={eachObject.id}
                value={eachObject.value}
                stateChange={stateChange}
                onButtonClick={handleButtonClick}
              />
            ))}
        </ul>
        {alert}
        <input className='inp'
          type="number"
          min="0"
          value={customValue}
          onChange={handleCustomValueChange}
          placeholder="Enter custom value"
        />
        <button className='pmr1' onClick={handleCustomValueSubmit}>Add custom value</button>
      </div>
    </div>
  );
};

export default CashWithdrawal;