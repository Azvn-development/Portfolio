import React from 'react';
import { useScrollTo } from '@/hooks/useScrollTo';
import { useDispatch } from 'react-redux';
import { useNavigationItems } from './hooks/useNavigationItems';
import { isMobile } from 'react-device-detect';
import styles from './styles.scss';
import { mobileMenuActions } from '@/redux/mobile-menu/redux';

export const Navigation = ():React.ReactElement => {
    const dispatch = useDispatch();

    const { scrollToBlock } = useScrollTo();
    const navigationItems = useNavigationItems();

    return (
        <nav className={styles.navigation}>
            {navigationItems.map((item, idx) => (
                <a 
                    key={idx}
                    onClick={() => {
                        scrollToBlock(item.id)
                        
                        if(isMobile) {
                            dispatch(mobileMenuActions.switchMobileVisibility())
                        } // if
                    }}
                >
                    {item.title}
                </a>
            ))}
        </nav>
    )
}