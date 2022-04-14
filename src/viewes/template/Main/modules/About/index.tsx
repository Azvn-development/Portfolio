import React from 'react';
import { Images } from '@/assets/images/Images';
import { useLocalization } from '@/hooks/useLocalization';
import styles from './styles.scss';

export const About = ():React.ReactElement => {
    const { Main: { About } } = useLocalization();

    return (
        <section id={'about'} className={styles.about}>
            <h1>{About.Title}</h1>
            <p>{About.Text}</p>

            <img src={Images.Avatar} />
        </section>
    )
}