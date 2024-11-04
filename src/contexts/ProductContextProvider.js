import { useState } from "react"
import ProductContext from "./ProductContext"



const ProductContextProvider=({children})=>{
       const [productList,setProductList]=useState([]);
       const [addCartList,setaddCartList]=useState([]);
       const [total,seTotal]=useState(0);
    //    console.log("p",...productList)
    //    console.log("p",[...productList])
       const add=(product)=>{
        setProductList([{...product},...productList]);
       }

       const clearCart=()=>{
         setaddCartList([]);
       }

       const purchaseItemS=(...props)=>{
        const purchaseList= productList.map((item)=>{
            return (item.id==props[0]&&item.sSize>0)?{...item,sSize:item.sSize-1}:item;
         })
        //   console.log("pp",purchaseList);
          setProductList(purchaseList)
          setaddCartList([{...props[1]},...addCartList]);

       }
       const purchaseItemM=(...props)=>{
        const purchaseList= productList.map((item)=>{
            return (item.id==props[0]&&item.mSize>0)?{...item,mSize:item.mSize-1}:item;
         })
         //  console.log("pp",purchaseList);
          setProductList(purchaseList)
          setaddCartList([{...props[1]},...addCartList]);

       }
       const purchaseItemL=(...props)=>{
         // console.log("props",props)
        const purchaseList= productList.map((item)=>{
            return (item.id==props[0]&&item.lSize>0)?({...item,lSize:item.lSize-1}):item;
         })

        //   console.log("pp",purchaseList);
          setProductList(purchaseList)
         //  console.log(props[1])
          setaddCartList([{...props[1]},...addCartList]);
       }
    
    return(

        <div>
        <ProductContext.Provider value={{productList,add,clearCart,purchaseItemS,purchaseItemM,purchaseItemL,addCartList}}>
             {children}
        </ProductContext.Provider>
        </div>
    )
}

export default ProductContextProvider;