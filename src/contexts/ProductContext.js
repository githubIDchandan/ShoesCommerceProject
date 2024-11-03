import { createContext } from "react";

const ProductContext=createContext({
    productList:[{
        Name:"Nike",
        desc:"shoes",
        price:1000,
        lSize:2,
        mSize:5,
        sSize:8


    }],

    add:(product)=>{},
    clearCart:()=>{}
})
export default ProductContext;