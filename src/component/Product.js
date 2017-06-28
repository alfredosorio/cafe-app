import React from 'react'
export default function Product({
    name,
    price
  }) {
  return (
    <div>
      <h3>{name} | ${price}<button>+</button> <button>-</button></h3>
    </div>
  )
}
