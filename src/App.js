import React, { Component } from 'react';
import coffee from './coffee.gif'
import './App.css';
import ProductMenu from './component/ProductMenu'
import Order from './component/Order'


// const data = [
//   {
//     name: "LOOONG Black",
//     price: 4
//   },
//   {
//     name: "Fair Trade Muffin",
//     price: 5
//   },
//   {
//     name: "Aussie Toastieee",
//     price: 6
//   },
//   {
//     name: "Dark Tea",
//     price: 4
//   }
// ]

// const orderlist = [
//   {
//     name: 'looong black',
//     price: 5,
//     number: 2
//   },
//   {
//     name: 'Heart shaped box',
//     price: 20,
//     number: 1
//   }
// ]

class App extends Component {
  state = {
    products: null,
    error: null
  }

  render() {
    const { products, error } = this.state

    return (
      <div className="App">
        <div className="App-header">
          <img src={coffee} className="App-logo" alt="logo" />
          <h2>Welcome to LOOONG and Strong</h2>
        </div>

        <div>
        {
          !!products ? (
            <div>
              {
                products.map(product => (
                <div key = { product._id }>
                  { product.name }
                  { product.price }
                </div>
                ))
              }
            </div>
          ) : (
            <h3>Loading products...</h3>
          )
        }
        </div>
      </div>

    );
  }

  componentDidMount() {
    fetch('https://cafe-app-again.now.sh/api/products')
      .then(res => res.json())
      .then(products => {
        this.setState({ products })
      })
      .catch(error => {
        this.setState({ error })
      })
  }
}

export default App;