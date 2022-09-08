import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: [],
    arrayOpenModals: [],
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
        setOpenModal(state, action) {
            action.payload.isOpen ?
                [...state.arrayOpenModals, action.payload.id] :
                state.arrayOpenModals.filter(id => id != action.payload.id)

        }
    }
})

export const CarsReducer = CarsSlice.reducer
export const { setCars, toggleIsLoading, setOpenModal } = CarsSlice.actions