export interface ITranslation {
    Header: {
        Navigation: {
            About: string,
            Skills: string,
            Projects: string,
            Experience: string,
            Contacts: string
        }
    },
    Main: {
        About: {
            Title: string,
            Text: string
        },
        Skills: {
            Title: string,
            FrontEnd: {
                Title: string,
                Description: string,
                TechnologiesStack: string
            },
            BackEnd: {
                Title: string,
                Description: string,
                TechnologiesStack: string
            },
            OtherSkills: {
                Title: string,
                Description: string,
                TechnologiesStack: string
            },
        },
        Portfolio: {
            Title: string
            Projects: {
                Interstanko: string,
                KievProkat: string,
                SaleroIO: string,
                'Salero landing': string,
                'Ship-cheaper': string,
                'Ukrstanko': string
            }
        },
        Experience: {
            Title: string,
            Experiences: {
                Year: number,
                Title: string,
                Text: string
            }[]
        }
    },
    Footer: {
        Contacts: {
            Title: string,
            Email: string,
            Phone: string,
            Socials: string
        },
        Copyright: string
    }
}