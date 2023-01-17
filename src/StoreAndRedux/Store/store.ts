import {combineReducers, configureStore} from "@reduxjs/toolkit";
import useReducer from "../Reducer/reducer";


export const rootReducer = combineReducers({
    useReducer
})

export const setupStore = () =>{
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']