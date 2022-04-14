import { Icons } from "@/assets/icons/Icons"
import { useMemo } from "react"

export const useSocials = () => {
    return useMemo(() => {
        return [
            {
                icon: Icons.Socials.Skype,
                link: 'skype:live:artmzvn_1?chat'
            },
            {
                icon: Icons.Socials.GitHub,
                link: 'https://github.com/Azvn-development'
            }
        ]
    }, [])
}