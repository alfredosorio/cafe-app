import React from 'react'
import Product from "./Product"


export default function ProductMenu({items}) {
  return (
    <div>
      <h1>Order Please</h1>
      {
        items.map((item, index) => (
          <Product key={ index }
              name={ item.name }
              price={ item.price }
          />
        ))
      }
      <button >Place Order NOW!</button>
    </div>
  )
}
