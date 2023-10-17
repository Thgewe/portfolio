import shiki from '../images/projects/shikimori.png';
import jago from '../images/projects/jago.png';
import dict from '../images/projects/kanji_dictionary.png';

const projects = [
    {
        image: dict,
        name: 'Japanese dictionary',
        description: 'Japanese language dictionary. You can search for the meaning and reading of various kanji, as well as its use in various words. It is possible to search for kanji by its reading. Data provided by kanjiapi.dev',
        stack: ['React', 'JavaScript', 'SCSS', 'kanjiapi.dev'],
        github: 'https://github.com/Thgewe/japanese-kanji-dictionary',
        deploy: 'https://cozy-cendol-54a246.netlify.app/',
    },
    {
        image: shiki,
        name: 'Shikimori',
        description: 'A site about anime, light novels and manga. The design was taken from the original. Some pages are not completed due to the large amount of work. After all, this is my first relatively large project, so there are a lot of mistakes that I’m noticing now.',
        stack: ['React', 'TypeScript', 'SCSS', 'Shikimori API'],
        github: 'https://github.com/Thgewe/shikimori',
        deploy: 'https://shikimori-khaki.vercel.app/',
    },
    {
        image: jago,
        name: 'JaGo',
        description: 'Another Japanese dictionary. This time a dictionary for recording your learned words. There is authentication and work with Firebase.',
        stack: ['React', 'TypeScript', 'SCSS', 'Firebase'],
        github: 'https://github.com/Thgewe/jago.git',
        deploy: 'https://jago.vercel.app/',
    },
];

export default projects;