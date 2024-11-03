import { useContext } from "react";
import ProductContext from "../contexts/ProductContext";
import { ImgUrl } from "../../utils/img";




const ShowProduct=()=>{
    const {productList}=useContext(ProductContext)
    console.log(productList)
    return(
        <div className="showp">
            {productList.map((item,index)=>{
                return(
                   <div className="plist" key={index}>
                      <div className="imgP">
                        <img className="shoesImg" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9e0de4e1-6862-4d96-9821-94050582defe/M+NIKE+AIR+ZOOM+TR+1.png"></img>
                        <span className="shoesdesc">
                            <h1>{item.Name}</h1>
                            <h2>{item.desc} Men Slip Resistance Surface Grip Walking Shoes</h2>
                            <h2>{"₹"}{item.price}</h2>
                        </span>
                        </div>
                     
            <div className="size">
                <h1 className="selectsize">SELECT SIZE</h1>
                <button className="btnsize">S</button>
                <button className="btnsize">M</button>
                <button className="btnsize">L</button>
            </div> 
            <div className="avail">
                <div className="availItem">
                    <h3>{item.lSize} Large size Available</h3>
                </div>
                <div className="availItem">
                    <h3>{item.mSize} Medium size Available</h3>
                </div>
                <div className="availItem">
                    <h3>{item.sSize} Small size Available</h3>
                </div>
            </div>
         </div>
        
        )
            })
            
            }
              
            

        </div>
    )
}

export default ShowProduct;