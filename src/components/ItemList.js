import { useContext } from "react";
import ProductContext from "../contexts/ProductContext";




const ItemList=({eactProductList})=>{
   const {addCartList}=useContext(ProductContext);
   console.log(eactProductList)
    const filterList=addCartList.filter((cartItem)=>{
        return cartItem.Name===eactProductList.Name;
    })
    //  console.log("add",addCartList)
    let lcount=0,mcount=0,scount=0;
    let amount=0;
    for(let i=0;i<filterList.length;i++){
      console.log(filterList[i].lsize);
      amount+=Number(filterList[i].price);
      if(filterList[i].lSize){
         lcount++;
      }
      else if(filterList[i].mSize){
         mcount++;
      }
      else{
         scount++;
      }
    }
    if(addCartList.length===0){
        return;
      }
    
    return(
        <div>
            {
               
               <div className="itemList">
                   <div>
                      <h2>{eactProductList.Name}</h2>
                     </div>
                     <div>
                       <p className="countshoes">{lcount}{"L"}{" "}{mcount}{"M"}{" "}{scount}{"S"}</p>
                     </div>
                     <div>
                        <h2>{"Rs. "}{amount}{"/-"}</h2>
                     </div>
                </div>
            
             
            }
        </div>
    )
}

export default ItemList;