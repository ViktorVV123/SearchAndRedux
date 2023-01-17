import axios from "axios";

import {createAsyncThunk} from "@reduxjs/toolkit";

export const Fetch = createAsyncThunk(
    'collections/name',
    async(_,thunkAPI) =>{
        try {
            const response = await axios.get('https://run.mocky.io/v3/616b22ed-648a-43d3-84bb-7d02bfd9cb04')
            return response.data
        }catch (e){
            return thunkAPI.rejectWithValue('ошибка')
        }

    }
)