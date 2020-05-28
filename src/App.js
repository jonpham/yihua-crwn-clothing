import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Homepage from "./pages/home-page";
import ShopPage from "./pages/shop-page";
import RegisterLoginPage from "./pages/register-login-page";

import "./App.scss";
import { onAuthStateChange } from "./auth/authUtils";
import { createUserProfileDocument } from "./db/entityModels/userProfile";

// This can probably be a Functional Component with Hooks & Effects.
class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
    this.unsubscribeFromAuth = null;
  }

  // This is only related to auth, so can probably be moved into HOC.
  componentDidMount() {
    this.unsubscribeFromAuth = onAuthStateChange(async (user) => {
      const userRef = await createUserProfileDocument(user);
      
      const currentUser = !!userRef ? await userRef.get() : null;
      
      this.setState({ currentUser }, () => {
        console.log(this.state.currentUser);
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="crwn-clothing">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route exact={true} path="/signin" component={RegisterLoginPage} />
          <Route exact={false} path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
