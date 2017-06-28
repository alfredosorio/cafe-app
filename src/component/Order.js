import React from 'react'
import moment from 'moment'
import Product from './Product'
import TotalPrice from './TotalPrice'
export default function Order ({items}) {
  // state = {
  //       TotalPrice: 0
  // }

 {
    return (
      <div>
        <h2>Orders Made</h2>
        {
          items.map((item) => (
            <h4>{ item.number } X { item.name }  costs $ <TotalPrice price= {item.price} number= {item.number}/> </h4>


          ))
        }
      </div>
    )
  }
}
