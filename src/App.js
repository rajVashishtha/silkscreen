import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';
import HomePage from './pages/homepage/homepage.page'
import SignPage from './pages/signpage/signpage.component'


function App() {
  return (
    <Switch>
      <Route exact path="/"  component={HomePage}></Route>
      <Route path="/signin" exact component={SignPage}></Route>
    </Switch>
  );
}

export default App;
