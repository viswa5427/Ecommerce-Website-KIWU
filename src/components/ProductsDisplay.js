import React from 'react'
import Cart from './Cart'
import {Row} from 'react-bootstrap'


function ProductDisplay(props){
    let content = [];
    props.products.forEach((product, i) =>{
          content.push(     
              <Cart items={product} key={i}/>
          )
    });
    return(
      <Row style={{margin:"10px"}}>{content}</Row>
    )
}

export default ProductDisplay;
