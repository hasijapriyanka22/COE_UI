import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Default from './components/Default';
//import Product from './components/ProductList/Product/Product';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';

class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
        <Navbar/>          
        <Switch>
              <Route exact path="/" component={ProductList}/>
              <Route path="/details" component={Details}/>
              <Route path="/cart" component={Cart}/>
              <Route component={Default}/>
        </Switch>
        </React.Fragment>
      </div>
    );
  }
}
export default App;