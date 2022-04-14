import React from 'react';
import { Contacts } from './modules/Contacts';
import { Copyright } from './modules/Copyright';
import { Logo } from './modules/Logo';
import styles from './styles.scss';

export const Footer = (): React.ReactElement => {
    return (
        <footer className={styles.footer}>
            <Logo />
            <Contacts />
            <Copyright />
        </footer>
    )
}