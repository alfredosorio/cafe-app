import React from 'react'
import moment from 'moment'
class Order  extends React.Component{
  state = {
    product: null,
    number: null,
    timeDate: null
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
        <h2>Order</h2>
        <p>HELLO</p>
        <button onClick={ this.handleIncrement}> + </button>
        <button onClick={ this.handleDecrement}> - </button>
        <h3>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
      </div>
    )
  }
}
export default Order
