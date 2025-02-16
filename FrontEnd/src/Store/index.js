import {configureStore} from '@reduxjs/toolkit'
import userLoggedIn from './Slice/userLoggedInSlice'
const store=configureStore({
    reducer:{
      user:userLoggedIn
    }
})

export default store;
