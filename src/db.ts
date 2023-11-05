import { Category } from "./models/category";
import { Project } from "./models/project";


export let projects: Project[] = [

    {
        id: 1,
        images: [
            'assets/images/web-project-2.jpg'
        ],
        title: 'Google Health Platform',
        type: 'Web Application',
        stack: [
            ''
        ]
    },
    {
        id: 2,
        images: [
            'assets/images/mobile-project-2.jpg'
        ],
        title: 'Phoenix Digital Agency',
        type: 'Mobile Application',
        stack: [
            ''
        ]
    },
    {
        id: 3,
        images: [
            'assets/images/ui-project-1.jpg'
        ],
        title: 'Cloud Storage Platform',
        type: 'UI/UX Design',
        stack: [
            ''
        ]
    },
    {
        id: 4,
        images: [
            'assets/images/web-project-1.jpg'
        ],
        title: 'Apple New Design System',
        type: 'Web Application',
        stack: [
            ''
        ]
    },
    {
        id: 5,
        images: [
            'assets/images/mobile-project-1.jpg'
        ],
        title: 'WeTalk Social Application',
        type: 'Mobile Application',
        stack: [
            ''
        ]
    },
    {
        id: 6,
        images: [
            'assets/images/mobile-project-1.jpg'
        ],
        title: 'Project Management UI',
        type: 'UI/UX design',
        stack: [
            ''
        ]
    },

]

export let categories: Category[] = [
    {
        id: 1,
        title: 'Web Application'
    },
    {
        id: 2,
        title: 'Frontend Application'
    },
    {
        id: 3,
        title: 'Backend Application'
    },
    {
        id: 4,
        title: 'Mobile Application'
    },
]

export let mainTitle = "";
export let mainTitlePosition = "";

export let githubUsername = "";
export let linkedInUsername = "";
export let twitterInUsername = "";
export let youtubeUsername = "";
