// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './PaymentPage.css';

// const PaymentPage = () => {
//   const { planId } = useParams();

//   return (
//     <section className="payment-page" style={{ backgroundColor: '#000', color: '#fff' }}>
//       <div className="container payment-container">
//         <h1 style={{ color: 'red' }}>Payment Page</h1>
//         <p>You selected Plan ID: {planId}</p>
//         <form className="payment-form">
//           <label htmlFor="cardNumber" style={{ color: '#fff' }}>Card Number</label>
//           <input type="text" id="cardNumber" placeholder="Enter your card number" required />

//           <label htmlFor="expiryDate" style={{ color: '#fff' }}>Expiry Date</label>
//           <input type="text" id="expiryDate" placeholder="MM/YY" required />

//           <label htmlFor="cvv" style={{ color: '#fff' }}>CVV</label>
//           <input type="text" id="cvv" placeholder="123" required />

//           <button type="submit" className="btn lg" style={{ backgroundColor: 'red', color: '#fff' }}>
//             Pay Now
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default PaymentPage;



import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './PaymentPage.css';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    // Show a success alert
    Swal.fire({
      title: 'Payment Successful!',
      text: 'Thank you for your payment.',
      icon: 'success',
      confirmButtonColor: '#d33',
      confirmButtonText: 'OK',
    }).then(() => {
      // Clear the form fields
      setFormData({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
      });
    });
  };

  return (
    <section className="payment-page" style={{ backgroundColor: '#000', color: '#fff' }}>
      <div className="container payment-container">
        <h1 style={{ color: 'red' }}>Payment Page</h1>
        <form className="payment-form" onSubmit={handlePayment}>
          <label htmlFor="cardNumber" style={{ color: '#fff' }}>
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            placeholder="Enter your card number"
            required
          />

          <label htmlFor="expiryDate" style={{ color: '#fff' }}>
            Expiry Date
          </label>
          <input
            type="text"
            id="expiryDate"
            value={formData.expiryDate}
            onChange={handleInputChange}
            placeholder="MM/YY"
            required
          />

          <label htmlFor="cvv" style={{ color: '#fff' }}>
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            placeholder="123"
            required
          />

          <button
            type="submit"
            className="btn lg"
            style={{ backgroundColor: 'red', color: '#fff' }}
          >
            Pay Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default PaymentPage;

