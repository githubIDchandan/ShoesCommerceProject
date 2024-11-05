import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartItem from "./components/CartItem";



const App=()=>{
    const [showCart,setShowCart]=useState(false);

    return(
        <ProductContextProvider>
        <div>

        <div className="cleardiv"><button className="clearBtn" onClick={()=>{
              localStorage.clear("product");
        }}>Clear data</button></div>

        {showCart&&<CartItem setShowCart={setShowCart}/>}
           <Header setShowCart={setShowCart}/>
          <Body/>
          
        </div>
        </ProductContextProvider>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)