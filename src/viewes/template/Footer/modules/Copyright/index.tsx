import React from 'react';
import { useLocalization } from '@/hooks/useLocalization';
import styles from './styles.scss';

export const Copyright = ():React.ReactElement => {
    const { Footer: { Copyright } } = useLocalization();

    return (
        <section className={styles.copyright}>
            <small>{Copyright}</small>
        </section>
    )
}