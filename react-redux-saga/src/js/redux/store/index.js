import {
    configureStore,
    getDefaultMiddleware,
    createSlice
} from "@reduxjs/toolkit";


// DO STUFF
const middleware = [
    ...getDefaultMiddleware(),
    /*YOUR CUSTOM MIDDLEWARES HERE*/
];

// AUTH STATE
const authState = {
    token: "",
    error: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload;
        },
        loginFailed: (state, action) => {
            state.error = action.payload;
        },
    },
});

const { loginSuccess, loginFailed } = authSlice.actions;
const authReducer = authSlice.reducer;

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware,
});

export default store;
