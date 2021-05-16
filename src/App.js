import React from 'react'
import products from './components/products.js'
import ProductsDisplay from './components/ProductsDisplay.js'


function App(){
  return(
    <div>
      <div>Header</div>
      <div><ProductsDisplay products={products} /></div>
      <div>Promise</div>
      <div>Footer</div>
    </div>
   );
}
export default App;