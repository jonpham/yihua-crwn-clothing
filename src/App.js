import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/header";
import Homepage from "./pages/home-page";
import ShopPage from "./pages/shop-page";
import RegisterLoginPage from "./pages/register-login-page";

import "./App.scss";
import { onAuthStateChange } from "./auth/authUtils";
import { createUserProfileDocument } from "./db/entityModels/userProfile";
import { setCurrentUser, clearCurrentUser } from "./redux/user/userActions";

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
          <Route exact={false} path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  clearCurrentUser: () => dispatch(clearCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
