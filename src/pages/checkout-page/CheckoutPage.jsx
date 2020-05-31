import React, { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelectors";

import "./CheckoutPage.scss";
import CheckoutItem from '../../components/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button';

const CheckoutPage = ({ items=[], total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {items.map((item) => <CheckoutItem item={item} key={item.id} />)}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <div className='test-warning'>
      *Please use the following test CC for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/21 - CCV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(memo(CheckoutPage));
