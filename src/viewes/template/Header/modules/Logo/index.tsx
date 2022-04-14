import React from 'react';
import { Images } from '@/assets/images/Images';
import styles from './styles.scss';

export const Logo = ():React.ReactElement => {
    return (
        <img src={Images.LogoDark} className={styles.logo} />
    )
}