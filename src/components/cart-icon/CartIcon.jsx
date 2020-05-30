import React, { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCart } from "../../redux/cart/cartActions";
import "./CartIcon.scss";
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

const CartIcon = ({ cartCount, toggleCart }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="cart-item-count">{cartCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(CartIcon));
