import { createSlice } from  '@reduxjs/toolkit'

const theaterSlice = createSlice({
    name : 'owner',
    initialState:{
        owner : null
    },
    reducers:{
        getTheaterByOwner : (state, action) => {
            state.owner = action.payload
        }
    }
})

export const { getTheaterByOwner } = theaterSlice.actions
export default theaterSlice.reducer