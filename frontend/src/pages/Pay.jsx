import React from 'react';
import { useLocation } from 'react-router-dom';

function PaymentPage() {
  const location = useLocation();
  const { value, stateChange } = location.state;

  const handlePaymentSuccess = () => {
    // Call the stateChange function passed from the CashWithdrawal component
    stateChange(value);
  }

  return (
    <div>
      {/* Render a fake payment form here */}
      <button onClick={handlePaymentSuccess}>Complete Payment</button>
    </div>
  );
}

export default PaymentPage;