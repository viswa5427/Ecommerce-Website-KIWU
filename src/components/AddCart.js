let cart=[]
const card = localStorage.getItem("cart");
console.log(card)
function AddCart(props){
    cart.push(props)
    console.log(cart)
    localStorage.setItem("cart", JSON.stringify(cart))
    
    console.log(localStorage.getItem("cart"))
}

export default AddCart;