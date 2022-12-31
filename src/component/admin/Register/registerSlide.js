import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../../api/todo';



export const registerSlice = createSlice({
    name: 'user',
    initialState: {
        user: []
    },
    reducers: {
        addUser: (sate, action) => {
            sate.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(addNewUser.fulfilled, (state, action) => {
            // Add user to the state array
            state.push(action.payload);

        });
    }
});


//Action Metalware Add new Item
export const addNewUser = createAsyncThunk('api/register', async (newUser) => {

    const response = await userApi.add(newUser);
    const data = response.data;
    return data;
});



