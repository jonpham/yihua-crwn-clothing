import React, { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";

import CartItem from "../cart-item";
import CustomButtom from "../custom-button";

import "./CartDropdown.scss";
import { toggleCart } from "../../redux/cart/cartActions";
import { selectCartItems } from "../../redux/cart/cartSelectors";

const CartDropdown = ({ cartItems, goToCheckout }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length > 0 ? (
        cartItems.map((item) => <CartItem item={item} key={item.id} />)
      ) : (
        <span className="empty-message">Your Cart is Empty</span>
      )}
    </div>
    <CustomButtom buttonType="primary" onClick={goToCheckout}>
      Go to Checkout
    </CustomButtom>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  goToCheckout: () => {
    dispatch(toggleCart());
    ownProps.history.push("/checkout");
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(memo(CartDropdown))
);
