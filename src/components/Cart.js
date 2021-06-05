import React from "react";
import Card from "react-bootstrap/Card";
import {Col} from 'react-bootstrap'
import AddCart from './AddCart.js'

function Cart(props) {
  return (
    <Col lg={3} md={4} sm={6} style={{padding:"10px"}}>
    <a style={{cursor:"pointer"}}>
    <Card >
      <Card.Img
        style={{width:"100%",height:"250px" }}
        variant="top"
        src={props.items.imgUrl}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "125%" }}>{props.items.name}</Card.Title>
        <Card.Text style={{ marginTop: "5px", marginBottom: "11px", cursor:"default" }}>
          {props.items.brief}
        </Card.Text>
        <div style={{ display: "flex" }}>
          <div>
            <select
              style={{ width: "100%", marginTop: "8px", cursor: "pointer" }}
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <div
              style={{
                color: "red",
                width: "100%",
                fontWeight: "200",
                fontSize: "90%",
                textDecorationLine: "line-through",
                textAlign: "center"
              }}
            >
              {props.items.orgprice}
            </div>
            <div
              style={{
                color: "black",
                width: "100%",
                fontWeight: "bold",
                fontSize: "100%"
              }}
            >
              {props.items.price}
            </div>
          </div>
          <div style={{ marginLeft: "2%" }}>
            <button style={{ cursor: "pointer", backgroundColor:"#FF69B4", borderRadius:"50px"}} onClick={()=> AddCart(props.items)}>
              <i
                className="fas fa-shopping-cart"
                style={{
                  width: "100%",
                  color: 'white',
                  marginTop: "10px",
                  marginBottom: "5px",
                  fontSize:"28px"
                }}
              ></i>
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
    </a>
    </Col>
  );
}

export default Cart;