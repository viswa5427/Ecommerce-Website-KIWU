import React from "react";
import Card from "react-bootstrap/Card";

function Cart({items}) {
  return (
    <Card style={{margin:"10px"}}>
      <Card.Img
        style={{ width: "100%", height:"300px" }}
        variant="top"
        src={items.imgUrl}
      />
      <Card.Body style={{margin:"5px"}}>
        <Card.Title style={{ fontSize: "125%" }}>{items.name}</Card.Title>
        <Card.Text style={{ marginTop: "5px", marginBottom: "11px" }}>
          {items.brief}
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
                width: "90%",
                fontWeight: "200",
                fontSize: "90%",
                textDecorationLine: "line-through",
                textAlign: "center"
              }}
            >
              {items.orgprice}
            </div>
            <div
              style={{
                color: "black",
                width: "90%",
                fontWeight: "bold",
                fontSize: "100%"
              }}
            >
              {items.price}
            </div>
          </div>
          <div style={{ paddingLeft: "2%" }}>
            <button style={{ cursor: "pointer" }}>
              <i
                class="fas fa-shopping-cart"
                style={{
                  width: "100%",
                  marginTop: "10px",
                  marginBottom: "5px"
                }}
              ></i>
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cart;