import { useState } from 'react';
import '../css/Wallet.css';
import DenominationItem from './DenominationItem';
import { dList } from './DList';

function CashWithdrawal (){
  const [money, setMoney] = useState(2000);

  const stateChange = (value) => {
    setMoney((prevState) => prevState + value);
  };

  // const { dList}=props;
  return (
    <div className="main-container">
      <div className="inner-container">
        <div className="heading-container">
          <div className="para-div">
            <p className="s">S</p>
          </div>
          <p className="name-para">Sarah Williams</p>
        </div>
        <div className="money-container">
          <p className="balance-name">Your Balance</p>
          <div className="balance-holder">
            <p className="amount">{money}</p>
          </div>
        </div>
        <p className="rupees">In Rupees</p>
        <p className="withdraw">Withdraw</p>
        <p className="choose">CHOOSE SUM (IN RUPEES)</p>

        <ul className="items-holder">
        {dList.map(
          (eachObject) => (
            <DenominationItem
              key={eachObject.id}
              value={eachObject.value}
              stateChange={stateChange}
            />
          ))}

                </ul>
      </div>
    </div>
  );
};

export default CashWithdrawal;