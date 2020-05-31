import React, { memo } from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price & 100; // set Price to USD cents
  const publishableKey = 'pk_test_S86rHgttAsYwNq7CzmuObBkd00Dvi4czLu';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Processed!');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='Crown Clothing Ltd.'
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.sv"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default memo(StripeCheckoutButton);