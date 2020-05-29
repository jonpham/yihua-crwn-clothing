import React, { memo } from 'react';
import { connect } from 'react-redux';

import CartItem from '../cart-item';
import CustomButtom from '../custom-button';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length > 0 && cartItems.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
    <CustomButtom buttonType="primary">
        Go to Checkout
    </CustomButtom>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(memo(CartDropdown));

