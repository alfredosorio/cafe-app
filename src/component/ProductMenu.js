import React from 'react'
import Product from "./Product"
export default function ProductMenu({
  items
  }) {
  return (
    <div>
      {
        items.map((item, index) => (
          <Product key={ index }
              name={ item.name }
              price={ item.price }
          />
        ))
      }
    </div>
  )
}
