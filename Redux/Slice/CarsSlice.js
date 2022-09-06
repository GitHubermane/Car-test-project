import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: [],
    isLoading: false
}

export const CarsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        setCars(state, action) {
            state.cars = action.payload
        },
        toggleIsLoading(state, action) {
            state.isLoading = action.payload
        }
    }
})

export const CarsReducer = CarsSlice.reducer
export const { setCars, toggleIsLoading } = CarsSlice.actions