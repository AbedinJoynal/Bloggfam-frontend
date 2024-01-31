import { createSlice, configureStore } from '@reduxjs/toolkit';
import { getUserIdFromLocalStorage } from '../components/utils';

const authSlice = createSlice({
    name: 'auth',
    initialState: { userId: null, isLoggedIn: Boolean(getUserIdFromLocalStorage()) },
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            localStorage.removeItem('userId');
            state.isLoggedIn = false;
            state.userId = null;
        },
    },
});
export const authActions = authSlice.actions;
export const store = configureStore({
    reducer: authSlice.reducer,
});
