import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./reducers/chatReducer.js";



 const store = configureStore({
    reducer: {
       chat : chatReducer
    }
})


export {store};

