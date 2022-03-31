// const projImage_

// import projectImages from '../src/assets/Images';

import projectImage_burkholderEyelashes from './assets/Images/projectCard-Images/e-commerce.png'
import projectImage_eazyEatz from './assets/Images/projectCard-Images/eazy-eatz.png'
import projectImage_armadilloConstruction from './assets/Images/projectCard-Images/armadillo-materials.png'
import projectImage_passwordGenerator from './assets/Images/projectCard-Images/passwordGenerator.png'
import projectImage_workDayScheduler from './assets/Images/projectCard-Images/workDayScheduler.png'
import projectImage_backEnd from './assets/Images/projectCard-Images/e-commerce-back-end.jpeg'
import projectImage_teamProfile from './assets/Images/projectCard-Images/team-profile-generator.png'

import projectImage_simplyPho_homepage from './assets/Images/projectCard-Images/simplyPho-homepage.png'
import projectImage_simplyPho_orderpage from './assets/Images/projectCard-Images/simplyPho-orderpage.png'
import projectImage_simplyPho_homepage_full from './assets/Images/projectCard-Images/simplyPho-homepage-full.png'
import projectImage_simplyPho_orderpage_full from './assets/Images/projectCard-Images/simplyPho-orderpage-full.png'

const imgPath = '/src/assets/Images/projectCard-Images/'

const projects = [
    {
        projName: 'Burkholder Eyelashes',
        projId: 'burkholder-eyelashes',
        title: 'ReactJS E-commerce Website',
        projLink: 'https://github.com/fremen432/burkholder-eyelashes-refactoring',
        liveLink: 'https://coruscating-manatee-dee84b.netlify.app/',
        image: projectImage_burkholderEyelashes,
        technologies: [
            'React JS',
            'Tailwind CSS',
            'Javascript'
        ]
    },
    {
        projName: 'Eazy Eatz',
        title: 'Recipe Finder Application',
        projLink: 'https://github.com/fremen432/eazy-eatz-refactor',
        liveLink: 'https://shiny-custard-6f1f83.netlify.app/',
        image: projectImage_eazyEatz,
        technologies: 'Javascript'
    },
    {
        projName: 'Armadillo Construction',
        title: 'Professional Full-Stack Website',
        projLink: 'https://github.com/MickeyPhillips/Project_2',
        liveLink: 'https://glacial-reef-85694.herokuapp.com/',
        image: projectImage_armadilloConstruction,
        technologies: [
            'HTML5',
            'Tailwind CSS',
            'Javascript'
        ]
    },
    {
        projName: 'Javascript Password Generator',
        title: 'Random Password Generator',
        projLink: 'https://github.com/fremen432/Random-Password-Generator',
        liveLink: 'https://fremen432.github.io/Random-Password-Generator/',
        image: projectImage_passwordGenerator,
        technologies: 'Javascript'
    },
    {
        projName: 'Work Day Scheduler',
        title: 'Work Day Scheduler',
        projLink: 'https://github.com/fremen432/Work-Day-Scheduler',
        liveLink: 'https://fremen432.github.io/Work-Day-Scheduler/',
        image: projectImage_workDayScheduler,
        technologies: [
            'Javascript',
            'Moment JS',
        ]
    },
    {
        projName: 'E-Commerce Back End',
        title: 'E-Commerce Back End',
        projLink: 'https://github.com/fremen432/e-commerce-back-end',
        liveLink: '',
        image: projectImage_backEnd,
        technologies: [
            'Javascript',
        ]
    },
    {
        projName: 'Team Profile Generator',
        title: 'Command Line Application',
        projLink: 'https://github.com/fremen432/team-profile-generator',
        liveLink: '',
        image: projectImage_teamProfile,
        technologies: [
            'Inquirer',
            'Node JS',
        ]
    }
    // {
    //     projName: '',
    //     title: '',
    //     projLink: '',
    //     liveLink: '',
    //     technologies: [
    //         '',
    //     ]
    // },
]
const featuredProject = {
    projName: 'Simply Pho House',
    title: 'React Restaurant Website',
    projLink: 'https://github.com/fremen432/online-restaraunt-order',
    liveLink: 'https://adorable-tiramisu-8d772f.netlify.app/',
    image: projectImage_simplyPho_homepage_full,
    technologies: [
        'React JS',
        'Tailwind CSS',
        'Javascript'
    ]
}

const contactLinks = [
    {
        platform: 'Email',
        href: 'mailto:cbmiller4897@gmail.com',
    },
    {
        platform: 'LinkedIn',
        href: 'https://www.linkedin.com/in/clayton-miller-20844810a',
    },
    {
        platform: 'GitHub',
        href: 'https://github.com/fremen432',
    },
    {
        platform: 'Stack OverFlow',
        href: 'https://stackoverflow.com/users/16523713/cmiller31',
    },

]

export { projects, featuredProject, contactLinks }