export const reducer =(state , action)=>{
    if(action.type === "REMOVE_ITEM")
    {
        return { ...state , item : state.item.filter((currElem)=>{
                return currElem.id != action.payload
        })}
    }


    if(action.type === "INCREMENT")
    {
        let updatedCart = state.item.map((currElem)=>{
            if( currElem.id ===action.payload)
            {
                return {...currElem, quantity : currElem.quantity +1};
                
            }
            return currElem;
        });
        return {...state , item : updatedCart};
    }

    if(action.type ==="DECREMENT")
    {
        const updatedCart= state.item.map((currElem)=>{
            if(currElem.id === action.payload)
            {
                return {...currElem, quantity: currElem.quantity -1}
            }
            return currElem;
        }).filter((currElem)=>   currElem.quantity != 0 )
        return { ...state, item : updatedCart};
    }


    if(action.type ==="GET_TOTAL")
    {
        let {totalItem, totalAmount }=state.item.reduce((accum,curVal)=>{
                let {price ,quantity} = curVal;
                let updatedtotlamnt = price * quantity;
                accum.totalAmount += updatedtotlamnt;

                accum.totalItem += quantity;
                return accum;
        },
        {
            totalItem : 0,
            totalAmount: 0,
        });
        return {...state,totalItem, totalAmount}
    }

return  state;
}