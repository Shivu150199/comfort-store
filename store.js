import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './src/features/cart/cartSlice';
import userReducer from './src/features/user/userSlice'

export const store=configureStore({
    reducer:{
        cartState:cartReducer,
        userState:userReducer,
    },
})

