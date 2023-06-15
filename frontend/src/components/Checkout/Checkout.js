import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, } from "react-redux";
import './Checkout.css';
import { placeOrder } from '../../actions/orderActions';
export default function Checkout({ subtotal }) {

  
  const dispatch = useDispatch()
  function tokenHandler(token)
    {
        console.log(token);
        dispatch(placeOrder(token,subtotal))
        console.log(token);

    }
  
    return (
    <div>
                 <StripeCheckout
                  amount={ subtotal * 100}
                  shippingAddress
                  token={tokenHandler}
                  stripeKey={process.env.REACT_APP_STRIPE_PUBLISHED_KEY}
                  currency="EUR"
                 >
     
                          <button className='checkout-button'> Pay Now</button>
                 </StripeCheckout>
         
    </div>
  )
}
