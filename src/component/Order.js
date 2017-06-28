import React from 'react'
import moment from 'moment'
export default function Order({
    timeDate,
    qty,
    product //the product object

  }) {
  return (
    <div>
      <h2>Order</h2>

      <h3>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
    </div>
  )
}
