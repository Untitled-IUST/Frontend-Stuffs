import { useState } from 'react';
import '../css/Wallet.css';
import DenominationItem from './DenominationItem';
import { dList } from './DList';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import axios from 'axios';

function CashWithdrawal (){
  const [money, setMoney] = useState(2000);
  const [customValue, setCustomValue] = useState('');
  const navigate = useNavigate();

  // const stateChange = (value) => {
  //   setMoney((prevState) => prevState + value);
  // };
  const stateChange = (newValue) => {
    setMoney(newValue);
  }  
  const handleButtonClick = (value) => {
    axios.post('/addBalance', { value: value })
      .then(response => {
        // handle successful POST request
        // navigate to payment page
        navigate('/payment');
        axios.get('/getNewValue')
          .then(response => {
            // handle successful GET request
            // update state with new value
            stateChange(response.data.newValue);
          })
      })
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
      axios.post('/addBalance', { value: parseInt(customValue) })
        .then(response => {
          // handle successful POST request
          // navigate to payment page
          navigate('/payment');
          axios.get('/getNewValue')
            .then(response => {
              // handle successful GET request
              // update state with new value
              stateChange(response.data.newValue);
            })
        })
      setCustomValue('');
    }
  }

  return (
    <div className="main-container">
      <div className="inner-container">
            
            <div className='prp'>
            <div className="heading-container">
              <img src={"https://s2.uupload.ir/files/348ad8c26d7ff7b6c23fe3e30f3e44dd_ducd.jpg"} alt='user image' className='pmr' />
              <p className="name-para">Sarah Williams</p>
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