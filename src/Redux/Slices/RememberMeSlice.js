import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: '',
    password: '',
    rememberMe: false,
}

const rememberMeSlice = createSlice({
    name: 'rememberMe',
    initialState,
    reducers: {
        SavedCustomerCredentials: (state, action) => {
            const { email, password, rememberMe } = action.payload
            state.email = rememberMe ? email : ''
            state.password = rememberMe ? password : ''
            state.rememberMe = rememberMe
        },
        SavedVendorCredentials: (state, action) => {
            const { email, password, rememberMe } = action.payload
            state.email = rememberMe ? email : ''
            state.password = rememberMe ? password : ''
            state.rememberMe = rememberMe
        },
        ClearCustomerCredentials: (state) => {
            state.email = '';
            state.password = '';
            state.rememberMe = false;
        },
        ClearVendorCredentials: (state) => {
            state.email = '';
            state.password = '';
            state.rememberMe = false;
        },
    }
})

export const { SavedCustomerCredentials, ClearCustomerCredentials, SavedVendorCredentials, ClearVendorCredentials } = rememberMeSlice.actions
export default rememberMeSlice.reducer