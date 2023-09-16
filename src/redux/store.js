import { configureStore } from "@reduxjs/toolkit";
import flightSlice from "./actions/slices/flightSlice";

export default configureStore({
    reducer: flightSlice
})