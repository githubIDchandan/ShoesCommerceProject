import { useContext, useState } from "react";
import ProductContext from "../contexts/ProductContext";



const Header=({setShowCart})=>{

   const {productList,addCartList}=useContext(ProductContext);

    return(
        <div className="hparent">
            <div>
                <h1 className="pname">Shoes Commerce Platform</h1>
            </div>
            <div>
                <button className="cartbtn" onClick={()=>{
                    setShowCart((prev)=>!prev)
                }}>{"🛒Cart"}:{addCartList.length}</button>
            </div>
        </div>
    )
}

export default Header;