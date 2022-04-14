import React from 'react';
import { Svg } from '@/viewes/components/Svg';
import { useSocials } from '@/hooks/useSocials';
import { useDispatch } from 'react-redux';
import { mobileMenuActions } from '@/redux/mobile-menu/redux';
import { isMobile } from 'react-device-detect';
import styles from './styles.scss';


export const Socials = ():React.ReactElement => {
    const dispatch = useDispatch();
    
    const socials = useSocials();

    return (
        <ul className={styles.socials}>
            {socials.map((social, idx) => (
                <li
                    key={idx}
                    onClick={() => {
                        if(isMobile) {
                            dispatch(mobileMenuActions.switchMobileVisibility())
                        } // if
                    }}
                >
                    <a href={social.link}>
                        <Svg src={social.icon} className={styles.icon} />
                    </a>
                </li>
            ))}
        </ul>
    )
} 