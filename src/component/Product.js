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
        <h3>{ this.props.product.name }</h3> 
        Price: ${ this.props.product.price }
        <br />
        <button onClick={ (event) => this.handleIncrement(event, this.state.number) }> + </button>
        
        {/* Quantity */}
        {` ${this.state.number} `}

        <button onClick={ (event) => this.handleDecrement(event, this.state.number) }> - </button>
      </div>
    )
  }
}

export default Product