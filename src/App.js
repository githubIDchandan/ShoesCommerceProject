import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import ProductContextProvider from "./contexts/ProductContextProvider";



const App=()=>{
    return(
        <ProductContextProvider>
        <div>
           <Header/>
           <Body/>
        </div>
        </ProductContextProvider>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)