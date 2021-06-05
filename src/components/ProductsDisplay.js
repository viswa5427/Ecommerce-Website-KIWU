import React from 'react'
import Cart from './Cart.js'
import {Row} from 'react-bootstrap'
import products from './products.js'

function ProductDisplay(props){
  let content = [];
  products.forEach((product, i) =>{
    if (props.category===product.category)
    {
        content.push(     
            <Cart items={product} key={i}/>
        )
   }
  });
  return(
    <Row style={{margin:"10px"}}>{content}</Row>
  )
}


export default ProductDisplay;
