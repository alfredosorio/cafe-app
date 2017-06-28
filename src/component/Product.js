import React from 'react'
class Product extends React.Component{

    state = {
      number: 0
    }


  handleIncrement = () => {
    this.setState((prevState) => ({
      number: prevState.number + 1
    }))
  }

  handleDecrement = () => {
    //  this.state.number -= 1
    //  this.forceUpdate() // Get it to render again

    this.setState((prevState) => ({
      number: prevState.number - 1
    }))
  }

  render() {
    return (
      <div>
        <h3>
        {this.props.name} ${this.props.price} | Quantity: {this.state.number}
         <button onClick={ this.handleIncrement}> + </button>
         <button onClick={ this.handleDecrement}> - </button>
        </h3>
      </div>
    )
  }
}

export default Product
