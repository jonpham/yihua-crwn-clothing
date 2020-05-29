import React, { memo } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crwn-logo.svg";
import CartDropdown from "../cart-dropdown";
import CartIcon from "../cart-icon";

import { signOutUser } from "../../auth/authUtils";

import "./Header.scss";

const Header = ({ currentUser, showCartDropdown }) => (
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
    {showCartDropdown && <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser: currentUser,
  showCartDropdown: !hidden,
});

export default connect(mapStateToProps)(memo(Header));
