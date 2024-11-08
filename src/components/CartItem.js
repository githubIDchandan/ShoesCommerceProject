import { useContext, useEffect } from "react";
import ProductContext from "../contexts/ProductContext";
import ItemList from "./ItemList";


const CartItem=({setShowCart})=>{

  const {addCartList,productList,clearCart}=useContext(ProductContext)
  
   const total=addCartList.reduce((accum,item)=>{
    return accum+Number(item.price);
   },0)

   useEffect(()=>{
      document.body.style.overflowY="hidden";
      return ()=>{
        document.body.style.overflowY="scroll";
      }
   },[])
   

    return(
        <div>
            <div className="ModalWrapper"></div>
            <div className="Modal">
          <div>
              <div>
              {
                 productList.map((item)=>{
                       return <ItemList eactProductList={item}/>
                 })
               }
              </div>
             <div>
              <p className="amount">Total amount to pay : {"₹ "}{total}</p>
             </div>
             
          </div>
         
            <div className="btnparent">
            <button className="cbtn" onClick={()=>{
                setShowCart((prev)=>!prev)
               }}>Cancel</button>

            <button className="pbtn" onClick={()=>{
              setShowCart((prev)=>!prev)
              clearCart()
            }}>Place Order</button>

            </div>
              
            </div>
        </div>
    )
}

export default CartItem;