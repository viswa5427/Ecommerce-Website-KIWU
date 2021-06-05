import React, {useState} from 'react'
import ProductsDisplay from './components/ProductsDisplay.js'


function App1(){
  const [active, setActive] = useState("dress");
  return(
  <div className="App">
    <nav>
      <button onClick={() => setActive("dress")}>Dress</button>
      <button onClick={() => setActive("saree")}>Saree</button>
      <button onClick={() => setActive("jeans")}>Jeans</button>
    </nav>
    <div>
      {active === "dress" && <ProductsDisplay category={"dress"} />}
      {active === "saree" && <ProductsDisplay category={"saree"} />}
      {active === "jeans" && <ProductsDisplay category={"jeans"} />}
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