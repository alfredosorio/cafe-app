import React from 'react'
import Product from './Product'


export default function TotalPrice({price, number}) {

  return (

      <span>{price * number}</span>

  )
}
