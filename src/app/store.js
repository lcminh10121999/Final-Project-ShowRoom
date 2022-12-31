import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import { loginSlice } from '../component/admin/Login/loginSlide';
import { registerSlice } from '../component/admin/Register/registerSlide';


export const store = configureStore({
    reducer: {
        user: registerSlice.reducer,
        userLogin: loginSlice.reducer,
    },
});
