import React from 'react';
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Icons } from '@/assets/icons/Icons';
import { useDisableScroll } from '@/hooks/useDisableScroll';
import styles from './styles.scss';

type Props = {
    images: string[];
    onClose: () => void;
}

export const Swiper = ({ images, onClose }:Props):React.ReactElement => {
    SwiperCore.use([Navigation, Pagination]);

    useDisableScroll();

    return (
        <div className={styles.swiperManualWrapper}>
            <img src={Icons.Other.CloseLight} onClick={onClose} className={styles.closeIcon} />
            
            <ReactSwiper
                pagination={{ "dynamicBullets": true }}
                navigation={{
                    prevEl: '.swiper-manual-button-prev',
                    nextEl: '.swiper-manual-button-next'
                }}
                className={'swiper-manual'}
            >
                {images.map((image, idx) => (
                    <SwiperSlide key={idx}>
                        <img src={image} />
                    </SwiperSlide>
                ))}

                <div className={'swiper-manual-button swiper-manual-button-prev'}>
                    <img src={Icons.Other.ArrowCircleLeft}  />
                </div>

                <div  className={'swiper-manual-button swiper-manual-button-next'}>
                    <img src={Icons.Other.ArrowCircleRight} /> 
                </div>
            </ReactSwiper>
        </div>
    )
}