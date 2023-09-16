import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../flightActions";


const initialState = {
    flights:[],isLoading:true, isError:false,route:[],
}
const flightSlice = createSlice({
    name: "flight",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getFlights.pending,(state)=>{
            state.isLoading = true;
        })
        builder.addCase(getFlights.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.flights = action.payload;
        })
        builder.addCase(getFlights.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            alert('Hata olustu')
        })
    },
    reducers:{
        setRoute: (state,action)=>{
        const newRoute = action.payload.map((i)=>[i.lat,i.lng])
        state.route = newRoute
        }
    }
})

export default flightSlice.reducer;
export const {setRoute}=flightSlice.actions;