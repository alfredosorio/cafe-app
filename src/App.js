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

const orderlist = [
  {
    name: 'looong black',
    price: 5,
    number: 2
  },
  {
    name: 'Heart shaped box',
    price: 20,
    number: 1
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
        <Order items={ orderlist } />

        <div>

        </div>
      </div>

    );
  }
}

export default App;
