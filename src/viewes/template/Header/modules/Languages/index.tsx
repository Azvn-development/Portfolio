import React from 'react';
import { localizationSelectors } from '@/redux/localization/selector';
import { useDispatch, useSelector } from 'react-redux';
import { localizationActions } from '@/redux/localization/redux';
import { useLanguageOptions } from '@/hooks/options/useLanguageOptions';
import { LanguageEnum } from '@/enums/LanguageEnum';
import { isMobile } from 'react-device-detect';
import styles from './styles.scss';
import { mobileMenuActions } from '@/redux/mobile-menu/redux';

export const Languages = ():React.ReactElement => {
    const dispatch = useDispatch();
    const language = useSelector(localizationSelectors.language);
    
    const languages = useLanguageOptions();

    return (
        <select
            value={language}
            onChange={(e) => { 
                dispatch(localizationActions.setLanguage(e.target.value as LanguageEnum));

                if(isMobile) {
                    dispatch(mobileMenuActions.switchMobileVisibility());
                } // if
            }}
            className={styles.languages}
        >
            {languages.map(language => (
                <option key={language.key} value={language.key}>{language.value}</option>
            ))}
        </select>
    )
}