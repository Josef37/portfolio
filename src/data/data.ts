import { nanoid } from 'nanoid';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const head = {
  title: 'Josef Wittmann | Software Developer',
  lang: 'en',
  description: 'Portfolio website of Josef Wittmann showcasing some projects',
};

export const hero = {
  title: 'Hi, my name is',
  name: 'Josef Wittmann',
  subtitle1: `I'm a Full Stack Software Developer`,
  subtitle2: `and a Bachelor of Science in Mathematics.`,
  cta: 'Want to know more?',
};

export const about = {
  paragraphOne: `Bachelor of Science in Mathematics, with a minor in Computer Science.`,
  paragraphTwo:
    'I have a love for problem solving and computers. Ranked high in many national championships (Mathematics and Computer Science).',
  paragraphThree: `I've been working as a web developer for a few years now, trying to write good code.`,
  resume: 'resume.pdf',
};

export const projects = [
  {
    id: nanoid(),
    img: 'bachelor-thesis.jpg',
    title: 'Extension Complexity of Convex n-Gons',
    info: 'My bachelor thesis in mathematics at the Technical University of Munich.',
    info2: 'Supervised by Prof. Dr. Stefan Weltge.',
    url: 'bachelor-thesis.pdf',
    repo: 'https://github.com/Josef37/extension-complexity-of-convex-n-gons',
  },
  {
    id: nanoid(),
    img: 'minesweeper.jpg',
    title: 'Minesweeper with Solver',
    info: 'This project is a simple minesweeper game with an automatic solver, which computes a probability distribution of mines.',
    info2: 'Press `P` for probabilities and `S` for solving according to probabilities.',
    url: 'https://josef37.github.io/minesweeper/built/',
    repo: 'https://github.com/Josef37/minesweeper',
  },
  {
    id: nanoid(),
    img: 'google-code-jam-2020-certificate.jpg',
    title: 'Google Coding Competitions',
    info: `Attempting Google's Coding Competitions with my favorite scientific programming language: Julia!`,
    info2: `Qualified for Round 2 in 2020.`,
    url: '',
    repo: 'https://github.com/Josef37/google-coding-competitions',
  },
  {
    id: nanoid(),
    img: 'mailchimp-cleaning.jpg',
    title: 'Mailchimp Inactive Subscriber Cleaning',
    info: `Remove inactive subscribers by sending a campaign with a confirmation link to tagged subscribers.`,
    info2: '',
    url: '',
    repo: 'https://github.com/Josef37/mailchimp-subscriber-cleaning',
  },
  {
    id: nanoid(),
    img: 'threejs-voxel.jpg',
    title: 'Three.js Voxel Game',
    info: `Learning 3D with three.js by building a voxel game.`,
    info2: '',
    url: '',
    repo: 'https://github.com/Josef37/three-js-voxel-game',
  },
  {
    id: nanoid(),
    img: 'table-tennis-tournament-handicap.jpg',
    title: 'Table Tennis Tournament Handicap',
    info: `Fun little idea on how to make our club tournament more fair.`,
    info2: 'Using basic probability theory and player rankings to introduce handicaps.',
    url: '',
    repo: 'https://github.com/Josef37/table-tennis-tournament-handicap',
  },
  {
    id: nanoid(),
    img: 'screeps-min-cut-wall.jpg',
    title: 'Screeps Wall Placement',
    info: `Re-useable script for optimal wall placement in the programming game Screeps.`,
    info2: `Using Dinic's algorithm and the max-flow min-cut theorem.`,
    url: '',
    repo: 'https://github.com/Josef37/screeps-min-cut-wall',
  },
];

const linkedinUrl = 'https://www.linkedin.com/in/josef-wittmann/';

export const contact = {
  cta: 'Would you like to work with me?',
  btn: 'Send Me a Message',
  btnUrl: linkedinUrl,
};

export const footer = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      icon: faLinkedinIn,
      url: linkedinUrl,
    },
    {
      id: nanoid(),
      name: 'github',
      icon: faGithub,
      url: 'https://github.com/Josef37',
    },
  ],
};
