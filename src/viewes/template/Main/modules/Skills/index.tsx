import React from 'react';
import { Svg } from '@/viewes/components/Svg';
import { useLocalization } from '@/hooks/useLocalization';
import { Images } from '@/assets/images/Images';
import styles from './styles.scss';

export const Skills = ():React.ReactElement => {
    const { Main: { Skills } } = useLocalization();

    return (
        <section id={'skills'} className={styles.skills}>
            <div className={styles.title}>
                <h2>{Skills.Title}</h2>
            </div>

            <ul className={styles.info}>
                <li>
                    <Svg src={Images.Skills.FrontEnd} />

                    <h3>{Skills.FrontEnd.Title}</h3>

                    <p>{Skills.FrontEnd.Description}</p>

                    <div className={styles.technologies}>
                        <p>{Skills.FrontEnd.TechnologiesStack}</p>
                        
                        <ul>
                            <li><p>React</p></li>
                            <li><p>Redux / Redux-Toolkit</p></li>
                            <li><p>SignalR</p></li>
                            <li><p>React-hook-form</p></li>
                            <li><p>Webpack</p></li>
                            <li><p>Apex charts</p></li>
                            <li><p>ANTD</p></li>
                        </ul>
                    </div>
                </li>

                    <li>
                        <Svg src={Images.Skills.BackEnd} />

                        <h3>{Skills.BackEnd.Title}</h3>

                        <p>{Skills.BackEnd.Description}</p>

                        <div className={styles.technologies}>
                            <p>{Skills.BackEnd.TechnologiesStack}</p>
                            
                            <ul>
                                <li><p>.NET CORE</p></li>
                                <li><p>EF CORE</p></li>
                                <li><p>SignalR</p></li>
                                <li><p>MS SQL / Postgres</p></li>
                                <li><p>MediatR</p></li>
                                <li><p>Fluent validation</p></li>
                                <li><p>Quartz</p></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <Svg src={Images.Skills.OtherSkills} />

                        <h3>{Skills.OtherSkills.Title}</h3>

                        <p>{Skills.OtherSkills.Description}</p>

                        <div className={styles.technologies}>
                            <p>{Skills.OtherSkills.TechnologiesStack}</p>
                            
                            <ul>
                               <li><p>Figma</p></li>
                               <li><p>Nginx</p></li>
                               <li><p>Docker</p></li>
                               <li><p>GitHub</p></li>
                               <li><p>GitLab</p></li>
                               <li><p>Jira</p></li>
                               <li><p>Miro</p></li>
                            </ul>
                        </div>
                    </li>
            </ul>
        </section>
    )
}