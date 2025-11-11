import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    customer: {
        email: '',
        password: '',
        rememberMe: false,
    },
    vendor: {
        email: '',
        password: '',
        rememberMe: false,
    }
}

const rememberMeSlice = createSlice({
    name: 'rememberMe',
    initialState,
    reducers: {
        SavedCustomerCredentials: (state, action) => {
            const { email, password, rememberMe } = action.payload
            state.customer.email = rememberMe ? email : ''
            state.customer.password = rememberMe ? password : ''
            state.customer.rememberMe = rememberMe
        },
        SavedVendorCredentials: (state, action) => {
            const { email, password, rememberMe } = action.payload
            state.vendor.email = rememberMe ? email : ''
            state.vendor.password = rememberMe ? password : ''
            state.vendor.rememberMe = rememberMe
        },
        ClearCustomerCredentials: (state) => {
            state.customer.email = '';
            state.customer.password = '';
            state.customer.rememberMe = false;
        },
        ClearVendorCredentials: (state) => {
            state.vendor.email = '';
            state.vendor.password = '';
            state.vendor.rememberMe = false;
        },
    }
})

export const { SavedCustomerCredentials, ClearCustomerCredentials, SavedVendorCredentials, ClearVendorCredentials } = rememberMeSlice.actions
export default rememberMeSlice.reducer