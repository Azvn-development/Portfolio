import { useCallback } from "react"

export const useScrollTo = () => {
    const scrollToBlock = useCallback((id: string) => {
        const element = document.getElementById(id);

        if(element) {
            window.scrollTo(0, element?.offsetTop)
        } // if
    }, [])

    return {
        scrollToBlock
    }
}