import React, { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  HeaderContainer,
  DivOption,
  LinkOption,
  LogoContainer,
  OptionsContainer,
} from "./Header.styled";

import { ReactComponent as Logo } from "../../assets/crwn-logo.svg";
import CartDropdown from "../cart-dropdown";
import CartIcon from "../cart-icon";

import { selectCurrentUser } from "../../redux/user/userSelectors";
import { selectIsCartHidden } from "../../redux/cart/cartSelectors";
import { signOutUser } from "../../auth/authUtils";

// import "./Header.scss";

const Header = ({ currentUser, hideCartDropdown }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <LinkOption to="/shop">
        Shop
      </LinkOption>
      <LinkOption to="/contact">
        Contact
      </LinkOption>
      {currentUser ? (
        <DivOption onClick={() => signOutUser()}>
          Sign Out
        </DivOption>
      ) : (
        <LinkOption to="/signin">
          Sign In
        </LinkOption>
      )}
      <CartIcon />
    </OptionsContainer>
    {!hideCartDropdown && <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hideCartDropdown: selectIsCartHidden,
});

export default connect(mapStateToProps)(memo(Header));
