import React, {useState} from 'react'
import products from './components/products.js'
import ProductsDisplay from './components/ProductsDisplay.js'
import jeans from './components/jeans.js'


function App1(){
  const [active, setActive] = useState("Sarees");
  return(
  <div className="App">
    <nav>
      <button onClick={() => setActive("Sarees")}>Sarees</button>
      <button onClick={() => setActive("Jeans")}>Jeans</button>
      <button onClick={() => setActive("Legins")}>Legins</button>
    </nav>
    <div>
      {active === "Sarees" && <ProductsDisplay products={products} />}
      {active === "Jeans" && <ProductsDisplay products={jeans} />}
      {active === "Legins" && <ProductsDisplay products={products} />}
    </div>
  </div>
  );
}


function App(){
  return(
    <div>
    <div>Header</div>
    <div><App1/></div>
    <div>Promise</div>
    <div>Footer</div>
  </div>
  );
  }



export default App;