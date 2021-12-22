import React, { useContext } from "react";
import { CartContext } from "./Cart";
import "./Cart.css";

function Item({ id ,title , description , price , img , quantity}){

         const {removeItem, increment, decrement} = useContext(CartContext);
    return(
        <div className="card cdr" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <h6>Price : Rs. {price}</h6>
            <div className="incdec">
            <i className="fas fa-minus mm"  onClick={()=> decrement(id)} ></i>
                <input className="i" type="text" placeholder={quantity} style={{ width: "30px" }} />
                <i className="fas fa-plus mm" onClick={()=> increment(id)}></i>
                
            </div>
            <i className=" btn btn-danger mn fas fa-trash"  onClick={()=>removeItem(id)}></i>
        </div>
    </div>
    );
}
export default Item;