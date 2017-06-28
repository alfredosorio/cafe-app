import React, { Component } from 'react';
import logo from './logo.svg';
import coffee from './coffee.gif'
import './App.css';
import ProductMenu from './component/ProductMenu'
import Order from './component/Order'


const data = [
  {
    name: "LOOONG Black",
    price: 4
  },
  {
    name: "Fair Trade Muffin",
    price: 5
  },
  {
    name: "Aussie Toastieee",
    price: 6
  },
  {
    name: "Dark Tea",
    price: 4
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={coffee} className="App-logo" alt="logo" />
          <h2>Welcome to LOOONG and Strong</h2>
        </div>
        <ProductMenu items={ data } />
        <div>
          <Order />
        </div>
      </div>

    );
  }
}

export default App;
