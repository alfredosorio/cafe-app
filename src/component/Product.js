import React from 'react';

class Product extends React.Component {
  constructor(product) {
    super(product)
    this.state = { number: 0 }
  }

handleIncrement = ({ event, number }) => {
  this.setState((prevState) => {
    prevState.number += 1
  })
}

handleDecrement = ({ event, number }) => {
  this.setState((prevState) => {
    prevState.number -= 1
  })
}

  render() {
    return (
      <div>
        <h3>
          <div>
            { this.props.product.name }
          </div>
          <div>
            Price: ${ this.props.product.price }
          </div>
        </h3> 
        
        <div>
          <button onClick={ (event) => this.handleIncrement(event, this.state.number) }> + </button>
          
          {/* Quantity */}
          {` ${this.state.number} `}
  
          <button onClick={ (event) => this.handleDecrement(event, this.state.number) }> - </button>
        </div>
      </div>
    )
  }
}

export default Product