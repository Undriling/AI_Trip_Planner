import { createSlice } from '@reduxjs/toolkit';

const ItinarySlice = createSlice ({
    name: "itinaryDetails",
    initialState: {
        itinary: null,
    },
    reducers: {
        addItinary: (state,action) => {
            state.itinary = action.payload;
        }
    }
})

export const { addItinary } = ItinarySlice.actions;

export default ItinarySlice.reducer;