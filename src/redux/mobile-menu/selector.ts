import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store"

const mobileMenuState = (state: RootState) => state.mobileMenu;

const visible = createSelector(mobileMenuState, (state) => state.visible);

export const mobileMenuSelectors = {
    visible,
}