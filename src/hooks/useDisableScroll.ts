import { useEffect } from "react";

export const useDisableScroll = () => {
    useEffect(() => {
        const bodyElement = document.getElementsByTagName('body')[0];
        bodyElement.style.overflowY = 'hidden';

        return () => {
            bodyElement.style.overflowY = 'scroll';
        }
    }, [])
}