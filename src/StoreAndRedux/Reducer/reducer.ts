import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {collection} from "../typeAll/typeAll";
import {Fetch} from "./featch";


export type UserState = {
    collections: collection[],
    isLoading: boolean,
    error: string

}

export const initialState: UserState = {

    collections: [],
    isLoading: false,
    error: ''

}
export const userSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {},
    extraReducers: {
        [Fetch.fulfilled.type]: (state, action: PayloadAction<collection[]>) => {
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
