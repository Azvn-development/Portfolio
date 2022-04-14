import { LanguageEnum } from "@/enums/LanguageEnum";
import { eng } from "@/localization/languages/ENG";
import { ru } from "@/localization/languages/RU";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store"

const localizationState = (state: RootState) => state.localization;

const language = createSelector(localizationState, (state) => state.language);

const translation = createSelector([language], (language) => {
    switch(language) {
        case LanguageEnum.ENG:
            return eng;

        case LanguageEnum.RU:
            return ru;
    } // switch
});

export const localizationSelectors = {
    language,
    translation
}