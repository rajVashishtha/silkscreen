import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';
import HomePage from './pages/homepage/homepage.page'
import SignPage from './pages/signpage/signpage.component'
import ProductsPage from './pages/product/product.page';
import CartPage from './pages/cartpage/cartpage.page';
import AdminPage from './pages/adminpage/adminpage.component'


function App() {
  return (
    <Switch>
      <Route exact path="/"  component={HomePage}></Route>
      <Route path="/signin" exact component={SignPage}></Route>
      <Route path="/products" component={ProductsPage}></Route>
      <Route exact path="/cart" component={CartPage}></Route>
      <Route exact path="/admin" component={AdminPage}></Route>
    </Switch>
  );
}

export default App;
