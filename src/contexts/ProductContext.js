import { createContext } from "react";

const ProductContext=createContext({
    productList:[{
        Name:"Nike",
        desc:"shoes",
        id:190,
        price:1000,
        lSize:2,
        mSize:5,
        sSize:8,


    }],
    addCartList:[{

    }],
    
    total:0,
    add:(product)=>{},
    purchaseItemS:(product)=>{},
    purchaseItemM:(product)=>{},
    purchaseItemL:(product)=>{},
    clearCart:()=>{}
})
export default ProductContext;