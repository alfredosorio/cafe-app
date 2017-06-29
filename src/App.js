import React, { Component } from 'react';
import coffee from './coffee.gif'
import './App.css';
import ProductList from './component/ProductList'
import Order from './component/Order'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <main>
          <div className="App">
            <div className="App-header">
              <img src={ coffee } className="App-logo" alt="logo" />
              <h2>Welcome to LOOONG and Strong</h2>
            </div>

            <nav>
              <Link to={'/'} >Home </Link>
              <Link to={'/products'} >Products </Link>
              <Link to={'/orders'} >Orders</Link>
            </nav>

            <div>
              <ProductList />
            </div>
          </div>
        </main>
      </Router>
    );
  }
}

export default App;