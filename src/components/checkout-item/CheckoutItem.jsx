import React, { memo } from "react";
import { connect } from "react-redux";

import "./CheckoutItem.scss";
import {
  addItemToCart,
  decrementItemCartQuantity,
  removeItemFromCart,
} from "../../redux/cart/cartActions";

const CheckoutItem = ({ addItem, decrementItem, item, removeItem }) => {
  const { name, imageUrl, price, quantity } = item;

  console.log('Ive update quantity:', quantity);

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decrementItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
  decrementItem: (item) => dispatch(decrementItemCartQuantity(item)),
  removeItem: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(memo(CheckoutItem));
