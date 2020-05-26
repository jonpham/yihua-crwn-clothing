import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/home-page';
import ShopPage from './pages/shop-page';
import Header from './components/header';

import './App.scss';

const App = () => {
  return (
    <div className="crwn-clothing">
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
