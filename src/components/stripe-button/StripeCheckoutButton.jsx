import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStrip = price * 100;
  const pulishablekey = 'pk_test_kW8RZvFl5oAQme7wDvh4uhez00GcK28DbD';
  const onToken = token => {
    console.log('token :', token);
    alert('Payment successfully');
  };
  return (
    <div>
      <StripeCheckout
        label="Pay now"
        ComponentClass="button"
        name="e-commerce clothing"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStrip}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={pulishablekey}
      />
    </div>
  );
};
export default StripeCheckoutButton;
