import React, { Component } from 'react';
import coffee from './coffee.gif'
import './App.css';
import ProductList from './component/ProductList'
import Order from './component/Order'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={ coffee } className="App-logo" alt="logo" />
          <h2>Welcome to LOOONG and Strong</h2>
        </div>

        <div>
          <ProductList />
        </div>
      </div>
    );
  }
}

export default App;