import React, { useState } from 'react';
import { useLocalization } from '@/hooks/useLocalization';
import { useProjects } from './hooks/useProjects';
import { Swiper } from '@/viewes/components/Swiper';
import { isMobile } from 'react-device-detect';
import styles from './styles.scss';
import { ImagesList } from '@/viewes/components/ImagesList';

export const Portfolio = ():React.ReactElement => {
    const { Main: { Portfolio } } = useLocalization();

    const projects = useProjects();
    
    const [selectedImages, setSelectedImages] = useState<string[]>([]);

    return (
        <section id={'projects'} className={styles.portfolio}>
            <h2>{Portfolio.Title}</h2>

            {Boolean(selectedImages.length) &&
                (!isMobile
                    ? <Swiper images={selectedImages} onClose={() => setSelectedImages([])} />
                    : <ImagesList images={selectedImages} onClose={() => setSelectedImages([])} />)}

            <ul className={styles.projects}>
                {projects.map((project, idx) => (
                    <li key={idx} onClick={() => setSelectedImages(project.images)}>
                        <img src={project.images[0]} />
                        <h3>{project.title}</h3>
                        <p>{project.text}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}