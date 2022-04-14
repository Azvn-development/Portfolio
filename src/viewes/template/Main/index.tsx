import React from 'react';
import { About } from './modules/About';
import { Experience } from './modules/Experience';
import { Portfolio } from './modules/Portfolio';
import { Skills } from './modules/Skills';
import styles from './styles.scss';

export const Main = (): React.ReactElement => {
    return (
        <main className={styles.main}>
            <About />
            <Skills />
            <Portfolio />
            <Experience />
        </main>
    )
}