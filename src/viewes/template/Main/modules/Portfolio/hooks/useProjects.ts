import { Images } from "@/assets/images/Images";
import { useLocalization } from "@/hooks/useLocalization";
import { useMemo } from "react";

export const useProjects = () => {
    const { Main: { Portfolio: { Projects } } } = useLocalization();

    const projects = useMemo(() => {
        return [
            {
                title: 'Interstanko',
                text: Projects['Interstanko'],
                images: [
                    Images.Projects.Interstanko.Interstanko1,
                    Images.Projects.Interstanko.Interstanko2,
                    Images.Projects.Interstanko.Interstanko3,
                ]
            },
            {
                title: 'KievProkat',
                text: Projects['KievProkat'],
                images: [
                    Images.Projects.KievProkat.KievProkat1,
                    Images.Projects.KievProkat.KievProkat2,
                    Images.Projects.KievProkat.KievProkat3,
                    Images.Projects.KievProkat.KievProkat4,
                ]
            },
            {
                title: 'SaleroIO',
                text: Projects['SaleroIO'],
                images: [
                    Images.Projects.SaleroIO.Salero1,
                    Images.Projects.SaleroIO.Salero2,
                    Images.Projects.SaleroIO.Salero3,
                    Images.Projects.SaleroIO.Salero4,
                ]
            },
            {
                title: 'Salero landing',
                text: Projects['Salero landing'],
                images: [
                    Images.Projects.SalerLanding.SaleroLanding1,
                    Images.Projects.SalerLanding.SaleroLanding2,
                    Images.Projects.SalerLanding.SaleroLanding3,
                ]
            },
            {
                title: 'Ship-cheaper',
                text: Projects['Ship-cheaper'],
                images: [
                    Images.Projects.ShipCheaper.ShipCheaper1,
                    Images.Projects.ShipCheaper.ShipCheaper2,
                    Images.Projects.ShipCheaper.ShipCheaper3,
                    Images.Projects.ShipCheaper.ShipCheaper4
                ]
            },
            {
                title: 'Ukrstanko',
                text: Projects['Ukrstanko'],
                images: [
                    Images.Projects.Ukrstanko.Ukrstanko1,
                    Images.Projects.Ukrstanko.Ukrstanko2,
                    Images.Projects.Ukrstanko.Ukrstanko3,
                    Images.Projects.Ukrstanko.Ukrstanko4,
                ]
            }
        ];
    }, [Projects])

    return projects;
}