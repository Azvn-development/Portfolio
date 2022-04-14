import React from 'react';
import { useLocalization } from '@/hooks/useLocalization';
import { useSocials } from '@/hooks/useSocials';
import { Svg } from '@/viewes/components/Svg';
import styles from './styles.scss';

export const Contacts = (): React.ReactElement => {
    const { Footer: { Contacts } } = useLocalization();

    const socials = useSocials();

    return (
        <section id={'contacts'} className={styles.contacts}>
            <h2>{Contacts.Title}</h2>

            <dl>
                <dt>{Contacts.Email}</dt>
                <dd>artmzvn@gmail.com</dd>

                <dt>{Contacts.Phone}</dt>
                <dd><a href={'tel:380503475539'}>+380 (50) 347-55-39</a></dd>

                <dt>{Contacts.Socials}</dt>
                <dd>
                    <div className={styles.socials}>
                        {socials.map((social, idx) => (
                            <a key={idx} href={social.link}>
                                <Svg src={social.icon} className={styles.icon} />
                            </a>
                        ))}
                    </div>
                </dd>
            </dl>
        </section>
    )
}