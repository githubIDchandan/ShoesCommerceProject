import { useState } from "react"
import ProductContext from "./ProductContext"



const ProductContextProvider=({children})=>{
       const [productList,setProductList]=useState([]);

       const add=(product)=>{
        setProductList([{...product},...productList]);
       }

       const clearCart=()=>{
        setProductList([]);
       }


    return(

        <div>
        <ProductContext.Provider value={{productList,add,clearCart}}>
             {children}
        </ProductContext.Provider>
        </div>
    )
}

export default ProductContextProvider;