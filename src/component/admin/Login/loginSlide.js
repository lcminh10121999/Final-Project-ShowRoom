import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../../api/todo';



export const loginSlice = createSlice({
    name: 'userLogin',
    initialState: {
        userList: [],
        error: null
    },
    reducers: {},
    // extraReducers: {
    //     [listUser.rejected]: (state, action) => {
    //         state.error = action.payload;
    //     },
    //     [listUser.fulfilled]: (state, action) => {
    //         state.userList = action.payload;
    //     }
    // },
    extraReducers: (builder) => {

        //gEt item
        builder.addCase(listUser.fulfilled, (state, action) => {
            // Add user to the state array
            state.userList = action.payload;
            console.log(action.payload);

        });
        builder.addCase(listUser.rejected, (state, action) => {
            // Tắt trạng thái loading, lưu thông báo lỗi vào store
            state.error = action.payload;
        });
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(loginAdmin.fulfilled, (state, action) => {
            // Add user to the state array
            state.push(action.payload);

        });
        builder.addCase(logoutAdmin.fulfilled, (state, action) => {
            // Add user to the state array
            state.push(action.payload);

        });
    }
});


//Action Metalware Add new Item
export const loginAdmin = createAsyncThunk('api/login', async (dataLogin) => {

    const response = await userApi.login(dataLogin);
    const data = response.data;
    return data;
});

export const logoutAdmin = createAsyncThunk('api/logout', async () => {
    const response = await userApi.logout();
    const data = response.data;
    return data;
});

export const listUser = createAsyncThunk('api/list-user', async () => {
    const response = await userApi.getAllUser();
    const data = response.data.user;
    console.log(data);
    return data;

});