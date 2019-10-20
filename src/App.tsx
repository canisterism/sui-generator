import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './containers/Home/index';

const App: FC<{}> = () => (
  <>
    <Switch>
      {/* <Route path='/' component={setsuTextarea} /> */}
      {/* <Route path='/setsu/:id' component={Setsu} /> */}
      <Route path='/' component={Home} />
      <Redirect to='/' />
    </Switch>
  </>
);

export default App;
