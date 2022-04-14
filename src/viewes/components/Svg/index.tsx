import React from 'react';

type Props = {
    src: string;
    className?: string;
}

export const Svg = ({ src, className }:Props): React.ReactElement => {
    return (
        <svg className={className}>
            <use xlinkHref={`${src}#icon`} />
        </svg>
    )
}