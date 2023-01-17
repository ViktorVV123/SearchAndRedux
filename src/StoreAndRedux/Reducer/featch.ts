import axios from "axios";

import {createAsyncThunk} from "@reduxjs/toolkit";
import {categoryes, collections} from "../typeAll/typeAll";

export const Fetch = createAsyncThunk(
    'collections/name',
    async(_,thunkAPI) =>{
        try {
            const response = await axios.get<collections[]>('https://run.mocky.io/v3/45efa975-6e1f-41e3-bbe3-0c47d6de388a')
            return response.data
        }catch (e){
            return thunkAPI.rejectWithValue('ошибка')
        }

    }
)
export const FetchCategory = createAsyncThunk(
    'categoryes/name',
    async(_,thunkAPI) =>{
        try {
            const responseTwo = await axios.get<categoryes[]>('https://run.mocky.io/v3/1610eada-a64a-42a1-8d23-52f988fd1c6e')
            return responseTwo.data
        }catch (e){
            return thunkAPI.rejectWithValue('ошибка')
        }

    }
)