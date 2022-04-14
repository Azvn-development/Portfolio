import { useLocalization } from "@/hooks/useLocalization";
import { useMemo } from "react";

export const useNavigationItems = () => {
    const { Header: { Navigation } } = useLocalization();

    return useMemo(() => {
        return [
            {
                id: 'about',
                title: Navigation.About
            },
            {
                id: 'skills',
                title: Navigation.Skills
            },
            {
                id: 'projects',
                title: Navigation.Projects
            },
            {
                id: 'experience',
                title: Navigation.Experience
            },
            {
                id: 'contacts',
                title: Navigation.Contacts
            }
        ]
    }, [Navigation])
}