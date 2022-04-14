import React from 'react';
import { Icons } from '@/assets/icons/Icons';
import { Svg } from '@/viewes/components/Svg';
import { Languages } from './modules/Languages';
import { Logo } from './modules/Logo';
import { Navigation } from './modules/Navigation';
import { Socials } from './modules/Socials';
import { isMobile } from 'react-device-detect';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { mobileMenuActions } from '@/redux/mobile-menu/redux';
import { mobileMenuSelectors } from '@/redux/mobile-menu/selector';
import styles from './styles.scss';

export const Header = (): React.ReactElement => {
    const dispatch = useDispatch();

    const visible = useSelector(mobileMenuSelectors.visible);

    return (
        <header className={styles.header}>
            <section className={styles.leftSection}>
                <Logo />
            </section>
        
            <section className={styles.rightSection}>
                <div 
                    className={cn(styles.menuIcon, { [styles.active]: visible })}
                    onClick={() => {
                        if(isMobile) {
                            dispatch(mobileMenuActions.switchMobileVisibility())
                        } // if
                    }} 
                >
                    <Svg src={Icons.Other.Menu} /> 
                </div>

                <div className={cn(styles.menu, { [styles.active]: visible })}>
                    <Navigation />
                    <Languages />
                    <Socials />
                </div>
            </section>
        </header>
    )
}