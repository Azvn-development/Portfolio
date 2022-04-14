import { Icons } from '@/assets/icons/Icons';
import { useDisableScroll } from '@/hooks/useDisableScroll';
import React from 'react';
import styles from './styles.scss';

type Props = {
    images: string[];
    onClose: () => void;
}

export const ImagesList = ({ images, onClose }:Props):React.ReactElement => {
    useDisableScroll();

    return (
        <div className={styles.imagesList}>
            <img src={Icons.Other.CloseLight} onClick={onClose} />

            <ul>
                {images.map((image, idx) => (
                    <li key={idx}>
                        <img src={image} />
                    </li>
                ))}
            </ul>
        </div>
        
    )
}