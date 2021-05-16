import React from "react";
import Cart from './Cart.js'
import {Row, Col} from 'react-bootstrap'

function ProductsDiplay(props){
    const rows = [...Array( Math.ceil(props.products.length / 4) )];
    const productRows = rows.map( (row, idx) => props.products.slice(idx * 4, idx * 4 + 4) ); 
    const content = productRows.map((row, idx) => (
        <Row style={{display:"flex"}}>  
          { row.map( product => <Col style={{width:"25%"}}><Cart items={product}/></Col> )}
        </Row>
         )
    );
    return (
      <div>{content} </div>
    );
  }

export default ProductsDiplay;