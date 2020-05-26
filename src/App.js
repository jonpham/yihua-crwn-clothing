import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/home-page';
import ShopPage from './pages/shop-page';
import './App.scss';

const App = () => {
  return (
    <div className="crwn-clothing">
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
