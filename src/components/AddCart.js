var cart = []
cart = localStorage.getItem("CartList");
cart = JSON.parse(cart);
console.log(cart)
function AddCart(props){
    cart.push(props.id)
    console.log(cart)
    localStorage.setItem("CartList", JSON.stringify(cart))
    
    console.log(localStorage.getItem("CartList"))
}

export default AddCart;