import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userData: null
}

const RoleSlice = createSlice({
    name: 'RoleSlice',
    initialState: initialState,
    reducers: {
        USER_ROLEDATA: (state, action) => {
            state.userData = action.payload
        }
    }
})

export default RoleSlice.reducer
export const { USER_ROLEDATA } = RoleSlice.actions