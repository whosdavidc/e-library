import React from 'react'

const ProductBox = (image, title, price) => {
  return (
    <div>
      <img src={image}></img>
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  )
}

export default ProductBox