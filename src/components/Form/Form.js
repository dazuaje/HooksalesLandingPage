// In your frontend component
import React, { useState } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import Stripe from 'stripe';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', amount: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      const response = await axios.post('/create-subscription', formData);
      const sessionId = response.data.sessionId;
      
      const stripe = window.Stripe(process.env.PUBLIC_STRIPE_KEY);
      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      console.error(err);
    }
  
  /*
  */    
  const handleToken = (token) => {
    console.log(token);
  };

  try {
        const response = await fetch('http://localhost:3010/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        console.log('Email sent successfully');
      } catch (error) {
        console.error(error);
      }
      /*
try {
    await axios.post('/send-email', formData);
    console.log('Email sent successfully');
} catch (err) {
    console.error(err);
}
*/
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Amount:
        <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
{/* 
      <StripeCheckout
        stripeKey={process.env.PUBLIC_STRIPE_KEY}
     //   token={handleToken}
        billingAddress={false}
        amount={formData.amount * 100}
        currency="USD"
      />
*/}
    </form>
  );
}

export default Form;
