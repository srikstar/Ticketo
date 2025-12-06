import { createSlice } from '@reduxjs/toolkit'

const storeSlice = createSlice({
    name : 'shows',
    initialState : {
        shows : null
    },
    reducers:{
        setShowsByOwner : (state, action) =>{
            state.shows = action.payload
        }
    }
})


export const { setShowsByOwner } = storeSlice.actions
export default storeSlice.reducer