import React, { createContext, useEffect, useReducer,  } from "react";
import "./Cart.css";
import { products } from "./Products";
import CartPage from "./CartPage";
import {reducer} from "./Reducer/reducer";

export const CartContext = createContext();

const initialState={
    item : products,
    totalAmount : 0,
    totalItems : 0
}

function Cart() {

    const [state , dispatch] = useReducer(reducer , initialState);

    //to delete element from ShoppingCart
    const removeItem= (id)=>{
         return dispatch(
             { type: "REMOVE_ITEM" ,
              payload : id,
            })
    }

    //increment the item
    const increment=(id)=>{
        return dispatch({
            type : "INCREMENT",
            payload : id,
        })
    }

    //decrement the item
    const decrement=(id)=>{
        return dispatch({
            type : "DECREMENT",
            payload : id,
        })
    }

    //useEffect to update the data
    useEffect(()=>{
            dispatch ({type: "GET_TOTAL"})
    },[state.item]); //state.item Whenever any action performs with state's items useEffect will call

    return (
        <CartContext.Provider value={ {...state, removeItem, increment, decrement}}>
        <CartPage/>
        </CartContext.Provider>
    );
}
export default Cart;