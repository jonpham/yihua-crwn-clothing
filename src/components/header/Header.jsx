import React, { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crwn-logo.svg";
import CartDropdown from "../cart-dropdown";
import CartIcon from "../cart-icon";

import { selectCurrentUser } from '../../redux/user/userSelectors';
import { selectIsCartHidden } from '../../redux/cart/cartSelectors';
import { signOutUser } from "../../auth/authUtils";

import "./Header.scss";

const Header = ({ currentUser, hideCartDropdown }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => signOutUser()}>
          Sign Out
        </div>
      ) : (
        <Link className="option" to="/signin">
          Sign In
        </Link>
      )}
      <CartIcon />
    </div>
    {!hideCartDropdown && <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hideCartDropdown: selectIsCartHidden,
});

export default connect(mapStateToProps)(memo(Header));
