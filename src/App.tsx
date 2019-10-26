import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './containers/Home/index';
import Setsu from './containers/Setsu/index';
import SetsuHeader from './components/SetsuHeader';
import SetsuFooter from './components/SetsuFooter';

const App: FC<{}> = () => (
  <>
    <SetsuHeader></SetsuHeader>
    <Switch>
      <Route exact path='/setsu/:id' component={Setsu} />
      <Route path='/' component={Home} />
      <Redirect to='/' />
    </Switch>
    <SetsuFooter />
  </>
);

export default App;
