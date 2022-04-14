import { LanguageEnum } from "@/enums/LanguageEnum";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LocalizationState = {
    language: LanguageEnum,
}

const initialState: LocalizationState = {
    language: LanguageEnum.ENG,
}

const localizationSlice = createSlice({
    name: 'localization',
    initialState: initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<LanguageEnum>) => {
            state.language = action.payload;
        },
    }
})

export const localizationReducer = localizationSlice.reducer;
export const localizationActions = localizationSlice.actions;