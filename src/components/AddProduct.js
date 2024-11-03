import { useState } from "react";
import ProductForm from "./ProductForm";
import ShowProduct from "./ShowProduct";


const AddProduct=()=>{
    const [pForm,setPform]=useState(false);
    return(
        <div className="addProductParent">
           <button className="addPbtn"
               onClick={()=>{
                setPform(!pForm);
               }}
           >Add Product</button>
           {pForm&&<ProductForm setPform={setPform}/>}
           <div className="showProduct">
           {pForm===false?<ShowProduct />:""}
           </div>
        </div>
    )
}

export default AddProduct;