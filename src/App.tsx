import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './containers/Home/index';
import Setsu from './containers/Setsu/index';

const App: FC<{}> = () => (
  <>
    <Switch>
      <Route exact path='/setsu/:id' component={Setsu} />
      <Route path='/' component={Home} />
      <Redirect to='/' />
    </Switch>
  </>
);

export default App;
