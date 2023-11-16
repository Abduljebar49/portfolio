import { flutterPro1Challenge } from "./constants";
import { Category } from "./models/category";
import { Project } from "./models/project";


export let projects: Project[] = [
    {
        id: 1,
        doneAt: new Date(),
        profile:'assets/projects/mobile-app-1/mobile-1-home.png',
        images: [
            'assets/projects/mobile-app-1/app-1-page-1.jpg',
            'assets/projects/mobile-app-1/app-1-page-2.jpg',
            'assets/projects/mobile-app-1/app-1-page-3.jpg',
            'assets/projects/mobile-app-1/app-1-page-4.jpg',
            'assets/projects/mobile-app-1/app-1-page-5.jpg',
            'assets/projects/mobile-app-1/app-1-page-6.jpg',
            'assets/projects/mobile-app-1/app-1-page-7.jpg',
            'assets/projects/mobile-app-1/app-1-page-8.jpg',
            'assets/projects/mobile-app-1/app-1-page-9.jpg',
        ],
        title: 'Gig Agenagn App',
        type: 'Mobile Application',
        client: {
            name: 'Dabbal Sofwares PLC',
            service: 'Web and Mobile Application',
            website: 'http://debbal.com/',
            phone: '+251910507045'
        },
        stack: [
            'Flutter & Dart',
            'Firebase Authentication',
            'Firestore',
            'Realtime database'
        ],
        challenges: flutterPro1Challenge,
        objective: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.
        `
    },
    {
        id: 2,
        profile:'assets/projects/mobile-app-2/mobile-2-home.png',
        doneAt: new Date(),
        images: [
            'assets/projects/mobile-app-2/app-2-page-1.jpg',
            'assets/projects/mobile-app-2/app-2-page-2.jpg',
            'assets/projects/mobile-app-2/app-2-page-3.jpg',
            'assets/projects/mobile-app-2/app-2-page-4.jpg',
            'assets/projects/mobile-app-2/app-2-page-5.jpg',
            'assets/projects/mobile-app-2/app-2-page-6.jpg',
            'assets/projects/mobile-app-2/app-2-page-7.jpg',
            'assets/projects/mobile-app-2/app-2-page-8.jpg',
            'assets/projects/mobile-app-2/app-2-page-9.jpg',
        ],
        title: 'Triachin Podcast app',
        type: 'Mobile Application',
        client: {
            name: 'Triachin Non Profit Organization',
            service: 'Helping those in need',
            website: 'http://triachin.org/',
            // phone: '+251910507045'
        },
        stack: [
            'Flutter & Dart',
            'Node',
            'Express',
        ],
        challenges: flutterPro1Challenge,
        objective: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.
        `
    },
    {
        id: 3,
        profile:'assets/projects/mobile-app-3/mobile-3-home.png',
        doneAt: new Date(),
        images: [
            'assets/projects/mobile-app-3/app-3-page-1.jpg',
            'assets/projects/mobile-app-3/app-3-page-2.jpg',
            'assets/projects/mobile-app-3/app-3-page-3.jpg',
            'assets/projects/mobile-app-3/app-3-page-4.jpg',
            'assets/projects/mobile-app-3/app-3-page-5.jpg',
            'assets/projects/mobile-app-3/app-3-page-6.jpg',
        ],
        title: 'Gig Agenagn App',
        type: 'Mobile Application',
        client: {
            name: 'Private Person - Caayaa',
            service: 'Religous Musician',
        },
        stack: [
            'Flutter & Dart',
            'Node',
            'Express',
        ],
        challenges: flutterPro1Challenge,
        objective: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.
        `
    },
    {
        id: 4,
        profile:'assets/projects/mobile-app-4/mobile-4-home.png',
        doneAt: new Date(),
        images: [
            'assets/projects/mobile-app-4/app-4-page-1.jpg',
            'assets/projects/mobile-app-4/app-4-page-2.jpg',
            'assets/projects/mobile-app-4/app-4-page-3.jpg',
            'assets/projects/mobile-app-4/app-4-page-4.jpg',
            'assets/projects/mobile-app-4/app-4-page-5.jpg',
        ],
        title: 'tiktok like App | challenge',
        type: 'Mobile Application',
        client: {
            name: 'Challenger from Kenya',
            service: 'Mobile Application',
        },
        stack: [
            'Flutter & Dart'
        ],
        challenges: flutterPro1Challenge,
        objective: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.
        `
    },
]

export let angularProjects: Project[] = []

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


