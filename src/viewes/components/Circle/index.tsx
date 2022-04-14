import React from 'react';
import styles from './styles.scss';

type Props = {
    text: string;
}

export const Circle = ({ text }:Props):React.ReactElement => {
    return (
        <div className={styles.circle}>
            {text}
        </div>
    )
}