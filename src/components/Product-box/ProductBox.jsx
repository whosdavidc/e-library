import React from 'react';
import "./ProductBox.css";

const ProductBox = (props) => {
  return (
    <div className='ProductBox'>
      <img className='productImage' src={props.image}></img>
      <h2 className="productTitle">{props.title}</h2>
      <p className="productOrigin">{props.origin}</p>
      <p className="productPrice">{props.price}</p>
    </div>
  )
}

export default ProductBox