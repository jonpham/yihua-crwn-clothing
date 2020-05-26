import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
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
