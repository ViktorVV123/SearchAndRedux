import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {categoryes, collections} from "../typeAll/typeAll";
import {Fetch, FetchCategory} from "./featch";


export type UserState = {
    categoryes: categoryes[],
    collections: collections[],
    isLoading: boolean,
    error: string,


}

export const initialState: UserState = {
    categoryes:[],
    collections: [],
    isLoading: false,
    error: ''

}
export const userSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
/*CategoryFilter:(state, action)=>{
    state.collections.map(e=>e.collections.filter(e=>e.category=== action.payload) )
}*/
    },
    extraReducers: {
        [FetchCategory.fulfilled.type]: (state, action: PayloadAction<categoryes[]>) => {
            state.categoryes=action.payload
        },
        [Fetch.fulfilled.type]: (state, action: PayloadAction<collections[]>) => {
            state.isLoading = false
            state.error = ''
            state.collections=action.payload
        },
        [Fetch.pending.type]: (state) => {
            state.isLoading = true
        },
        [Fetch.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }

})

export default userSlice.reducer;
