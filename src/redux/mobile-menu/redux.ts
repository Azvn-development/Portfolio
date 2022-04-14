import { createSlice } from "@reduxjs/toolkit";

type LocalizationState = {
    visible: boolean,
}

const initialState: LocalizationState = {
    visible: false
}

const mobileMenuSlice = createSlice({
    name: 'mobileMenu',
    initialState: initialState,
    reducers: {
        switchMobileVisibility: (state) => {
            state.visible = !state.visible;
        },
    }
})

export const mobileMenuReducer = mobileMenuSlice.reducer;
export const mobileMenuActions = mobileMenuSlice.actions;