import { createSlice } from "@reduxjs/toolkit";


const dialogSlice = createSlice({
    name: "dialog",
    initialState: {
        open: false,
    },
    reducers: {
        setDialogOpen: (state, action) => {
            state.open = action.payload;
        },
    },
});

export const { setDialogOpen } = dialogSlice.actions;
export default dialogSlice.reducer;
