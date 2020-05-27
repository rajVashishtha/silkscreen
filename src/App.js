import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import './App.css';
import HomePage from './pages/homepage/homepage.page'


function App() {
  return (
    <BrowserRouter>
      <Route path="/"  component={HomePage}></Route>
    </BrowserRouter>
    
  );
}

export default App;
