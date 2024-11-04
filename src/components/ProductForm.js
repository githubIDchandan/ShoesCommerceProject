import { useContext, useState } from "react";
import ProductContext from "../contexts/ProductContext";



const ProductForm=({setPform})=>{
    
    const [list,setList]=useState({Name:"",desc:"",price:0,lSize:0,mSize:0,sSize:0});

    const {add}=useContext(ProductContext);
    const addHandler=(e)=>{
        e.preventDefault()
        console.log(list)
        add({...list,id:Math.random()});
        setList({Name:"",desc:"",price:0,lSize:0,mSize:0,sSize:0});
        setPform(false)
    }

    return(
        <div className="pform">
            <form onSubmit={addHandler}>
                <label> ProductName : </label>
                <input className="p" value={list.Name} onChange={(e)=>{
                    setList({...list,Name:e.target.value})
                }}></input>
                <label> Description : </label>
                <input className="p" value={list.desc} onChange={(e)=>{
                    setList({...list,desc:e.target.value})
                }}></input>
                <label> Price : </label>
                <input type="number" className="priceInp" placeholder="Rs." value={list.price}
                   onChange={(e)=>{
                    setList({...list,price:e.target.value})
                   }}
                ></input>
                <label> Large : </label>
                <input className="sizeInp" placeholder="L" value={list.lSize} onChange={(e)=>{
                    setList({...list,lSize:e.target.value})
                }}></input>
                <label> Medium : </label>
                <input className="sizeInp" placeholder="M" value={list.mSize} onChange={(e)=>{
                    setList({...list,mSize:e.target.value})
                }}></input>
                <label> Small : </label>
                <input className="sizeInp" placeholder="S" value={list.sSize} onChange={(e)=>{
                    setList({...list,sSize:e.target.value})
                }}></input>
                <button type="submit" className="submitbtn">Submit</button>
            </form>
        </div>
    )
}

export default ProductForm;