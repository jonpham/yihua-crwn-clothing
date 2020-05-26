import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import './App.scss';

const App = () => {
  return (
    <div className="crwn-clothing">
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
