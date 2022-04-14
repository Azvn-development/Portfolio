import { ITranslation } from "../ITranslation";

export const eng: ITranslation = {
    Header: {
        Navigation: {
            About: 'About',
            Skills: 'Skills',
            Projects: 'Projects',
            Experience: 'Experience',
            Contacts: 'Contacts'
        }
    },
    Main: {
        About: {
            Title: 'Artem Zviahintsev',
            Text: "I'm working as a professional React / .NET CORE developer for over 2 years and have experience in different projects. Developed hight-loaded web-sites, analytic systems, CRM systems, landings. I don't afraid hard work, adapt to new environment easly. I'd be happy to join you team.",
        },
        Skills: {
            Title: 'Skills',
            FrontEnd: {
                Title: 'Front-end developer',
                Description: 'UI development for high-load applications using React and other technologies',
                TechnologiesStack: 'Technologies stack:'
            },
            BackEnd: {
                Title: 'Back-end developer',
                Description: 'Back-end development, software and database architecture design using .NET, EF CORE, etc.',
                TechnologiesStack: 'Technologies stack:'
            },
            OtherSkills: {
                Title: 'Other skills',
                Description: 'I have experience with version control systems, project management systems, interface development services, etc.',
                TechnologiesStack: 'Technologies stack:'
            },
        },
        Portfolio: {
            Title: 'Projects',
            Projects: {
                'Interstanko': 'The site of the partner association "Interstanko" specializing in the sale of factory machines',
                KievProkat: 'Landing for a company specializing in the sale of rolled metal products',
                SaleroIO: 'Multi-function dashboard to track trading performance on the Wildberries platform',
                "Salero landing": 'Service of analysis and increase of sales at Wildberries',
                "Ship-cheaper": 'ERP system for managing orders from various marketplaces',
                Ukrstanko: 'Private automatic accounting system for factory machines'
            }
        },
        Experience: {
            Title: 'Experience',
            Experiences: [
                {
                    Year: 2022,
                    Title: 'Ship-cheaper (Full-stack developer React, .NET)',
                    Text: `1. Front-end development using React (Typescript, Redux, REST API). <br />
                           2. Back-end development using .NET CORE (REST API, database architecture development, integration with third-party API).`
                },
                {
                    Year: 2020,
                    Title: 'Freelance (Full-stack developer React, .NET)',
                    Text: `1. Landing Salero (Front-end development using React, Typescript, Redux, ANTD). Service of analysis and increase of sales at Wildberries.<br/>
                           2. Analytical system Salero (Front-end development using React, Typescript, Redux, ApexCharts, ANTD). Multi-function dashboard to track trading performance on the Wildberries platform.<br/>
                           3. Interstanko (Full development using React and .NET CORE). The site of the partner association "Interstanko" specializing in the sale of factory machines.<br/>
                           4. Ukrstanko (Full development using ASP.NET MVC). Private automatic accounting system for factory machines.<br/>
                           5. Landing KievProkat (Full development using React). Landing for a company specializing in the sale of rolled metal products.`
                },
                {
                    Year: 2019,
                    Title: 'Branch of Computer Academy "STEP", Donetsk (Ukraine)',
                    Text: 'Software Developer'
                },
                {
                    Year: 2018,
                    Title: 'Donetsk National University, Donetsk (Ukraine)',
                    Text: 'UNI "Economic Cybernetics", Business Informatics'
                }
            ]
        }
    },
    Footer: {
        Contacts: {
            Title: 'Artem Zviahintsev',
            Email: 'Email:',
            Phone: 'Phone:',
            Socials: 'Socials:'
        },
        Copyright: `© Created by Artem Zviahintsev, ${new Date().getFullYear()}`
    }
}