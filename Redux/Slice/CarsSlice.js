import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: [],
    currentPage: 1,
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
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
    }
})

export const CarsReducer = CarsSlice.reducer
export const { setCars, toggleIsLoading, setCurrentPage } = CarsSlice.actions