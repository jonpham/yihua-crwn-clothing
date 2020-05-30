import React, { memo } from 'react';
import { connect } from 'react-redux';

import "./CheckoutItem.scss";
import { removeItemFromCartById } from '../../redux/cart/cartActions';

const CheckoutItem = ({ item: { name, id, imageUrl, price, quantity }, removeItem }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={imageUrl} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">${price}</span>
    <div className="remove-button" onClick={() => removeItem(id)}>&#10005;</div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  removeItem: (itemId) => dispatch(removeItemFromCartById(itemId))
});

export default connect(null, mapDispatchToProps)(memo(CheckoutItem));
