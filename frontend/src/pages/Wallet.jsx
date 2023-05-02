import { useState } from 'react';
import '../css/Wallet.css';
import DenominationItem from './DenominationItem';
import { dList } from './DList';
import { useNavigate } from 'react-router-dom';

function CashWithdrawal (){
  const [money, setMoney] = useState(2000);
  const [customValue, setCustomValue] = useState('');
  const navigate = useNavigate();

  const stateChange = (value) => {
    setMoney((prevState) => prevState + value);
  };

  const handleButtonClick = (value) => {
    navigate('/payment', { state: { value: value, stateChange: stateChange } });
  }

  const handleCustomValueChange = (event) => {
    setCustomValue(event.target.value);
  }
  const handleCustomValueSubmit = () => {
    if (customValue) {
      navigate('/payment', { state: { value: parseInt(customValue), stateChange: stateChange } });
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

        <input
          type="number"
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