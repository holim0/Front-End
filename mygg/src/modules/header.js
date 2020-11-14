import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSign: false,
};

const header = createSlice({
    name: "header",
    initialState,
    reducers: {
        signFormShowing(state) {
            state.isSign = !state.isSign;
        },
    },
});

export const { signFormShowing } = header.actions;

export default header.reducer;
