import React from 'react'
import Product from './Product'
class ProductList extends React.Component{

  state = {
    product: null,
    error: null,
  }

  render() {
    const { products, error } = this.state
    return (
      <div>
        {
          !!products ? (
            <div>
              {
                products.map(product => (
                  <div key = { product._id }>
                    <Product product={ product } />
                  </div>
                ))
              }
            </div>
          ) : (
            <h3>Loading products...</h3>
          )
        }
      </div>
    )
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

export default ProductList
