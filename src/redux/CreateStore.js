import { configureStore } from "@reduxjs/toolkit";
import SwiggyCartSlice from './SwiggyCartSlice'
const store=configureStore(
    {
        reducer:{
            cart:SwiggyCartSlice
        }
    }
)
export default store