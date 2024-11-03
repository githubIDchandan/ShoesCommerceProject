import { useContext } from "react";
import AddProduct from "./AddProduct";
import ProductContext from "../contexts/ProductContext";



const Body=()=>{
    const {productList,add,clearCart}=useContext(ProductContext);
    console.log(productList)
    // console.log(add);
    // console.log(clearCart)
    return(
        <div>
            <AddProduct/>
        </div>
    )
}


export default Body;