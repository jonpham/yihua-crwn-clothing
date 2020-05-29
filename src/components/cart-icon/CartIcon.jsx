import React, { memo } from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCart } from "../../redux/cart/cartActions";
import "./CartIcon.scss";

const CartIcon = ({ cartCount, toggleCart }) => (
  <div className="cart-icon" onClick={cartCount > 0 ? toggleCart : null}>
    <ShoppingIcon className="shopping-icon" />
    <span className="cart-item-count">{cartCount}</span>
  </div>
);

const mapStateToProps = (state) => ({
  cartCount: state.cart.cartItems.length || 0,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(CartIcon));
