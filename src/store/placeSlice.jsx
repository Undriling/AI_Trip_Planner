import { createSlice } from '@reduxjs/toolkit';

const PlaceSlice = createSlice ({
    name: "places",
    initialState: {
        placesName: null,
        tripDetails: {
            travelDays: null,
            budget: null,
            travelerList: null
        }
    },
    reducers: {
        addPlacesName: (state,action) => {
            state.placesName = action.payload;
        },
        addTripDetails: (state,action) => {
            const {key, value} = action.payload;
            state.tripDetails[key] = value;
        }
    }
})

export const { addPlacesName, addTripDetails } = PlaceSlice.actions;

export default PlaceSlice.reducer;