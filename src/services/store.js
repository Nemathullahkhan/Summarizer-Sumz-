import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";
export const store = configureStore({  // store a global state that saves entire information
    reducer:{
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddlware)=> getDefaultMiddlware().concat(articleApi.middleware)
});

// we reduce the entire set to get specific part from the state 