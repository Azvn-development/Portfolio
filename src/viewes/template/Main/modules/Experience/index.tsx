import React from 'react';
import { useLocalization } from '@/hooks/useLocalization';
import { Circle } from '@/viewes/components/Circle';
import styles from './styles.scss';

export const Experience = ():React.ReactElement => {
    const { Main: { Experience: { Experiences } } } = useLocalization();

    return (
        <section id={'experience'} className={styles.experience}>
            <h2>Experience</h2>

            <ul className={styles.experienceList}>
                {Experiences.map((experience, idx) => (
                    <li key={idx}>
                        <Circle text={`${experience.Year}`} />

                        <div className={styles.description}>
                            <h3>{experience.Title}</h3>
                            <p dangerouslySetInnerHTML={{ __html: experience.Text }}></p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}