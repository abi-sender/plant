import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
    cart: savedCart,
    totalAmount: 0,
};
const cart=createSlice({
name:"cart",
initialState,
reducers:{
    SetCart: (state, action) => {
    state.cart = action.payload;
  },
    Addcart:(state,action)=>
    {
        const item=state.cart.find((item)=>item.id === action.payload.id )
        if(item)
        {
            item.qty +=1
        }
        else
        {
            state.cart.push({...action.payload,
                qty:1});
            }
 }, 

   
   Removecart:(state,action)=>{
   state.cart=state.cart.filter((ites)=>ites.id!==action.payload)
   },
   //incrementqty
   Incrementqty:(state,action)=>{
    const inc=state.cart.find((itm)=>itm.id===action.payload)
    if(inc)
    {
        inc.qty +=1;
    }
   },
 //decrementqty
 Decrementqty:(state,action)=>
 {
    const dec=state.cart.find((im)=>im.id===action.payload)
    if(dec && dec.qty >1)
    {
        dec.qty -=1;
    }
 },
 //calculator 
 TotalAmount: (state) => {
  state.totalAmount = state.cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
},
 }
}
)
export const{SetCart,Addcart,Removecart,Incrementqty,Decrementqty,TotalAmount}=cart.actions
export default cart.reducer;
