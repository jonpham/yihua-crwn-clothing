import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/header";
import CheckoutPage from './pages/checkout-page';
import Homepage from "./pages/home-page";
import ShopPage from "./pages/shop-page";
import RegisterLoginPage from "./pages/register-login-page";

import { onAuthStateChange } from "./auth/authUtils";
import { createUserProfileDocument } from "./db/entity-models/userProfile";
import { setCurrentUser, clearCurrentUser } from "./redux/user/userActions";
import { selectCurrentUser } from "./redux/user/userSelectors";

import "./App.scss";


// This can probably be a Functional Component with Hooks & Effects.
class App extends React.PureComponent {
  unsubscribeFromAuth = null;

  // This is only related to auth, so can probably be moved into HOC.
  componentDidMount() {
    const { setCurrentUser, clearCurrentUser } = this.props;

    this.unsubscribeFromAuth = onAuthStateChange(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) =>
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          })
        );
      } else {
        clearCurrentUser();
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="crwn-clothing">
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route exact={false} path="/shop" component={ShopPage} />
          <Route exact={true} path="/checkout" component={CheckoutPage} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <RegisterLoginPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  clearCurrentUser: () => dispatch(clearCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
