import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header';
import Homepage from './pages/home-page';
import ShopPage from './pages/shop-page';
import RegisterLoginPage from './pages/register-login-page';

import './App.scss';

const App = () => {
  return (
    <div className="crwn-clothing">
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route exact={true} path="/signin" component={RegisterLoginPage} />
        <Route exact={false} path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
