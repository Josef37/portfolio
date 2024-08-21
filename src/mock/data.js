import { nanoid } from 'nanoid';

export const headData = {
  title: 'Josef Wittmann | Software Developer',
  lang: 'en',
  description: 'Portfolio website of Josef Wittmann showcasing some projects',
};

export const heroData = {
  title: 'Hi, my name is',
  name: 'Josef Wittmann',
  subtitle1: `I'm a Full Stack Software Developer`,
  subtitle2: `and a Bachelor of Science in Mathematics.`,
  cta: 'Want to know more?',
};

export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Bachelor of Science in Mathematics, with a minor in Computer Science.`,
  paragraphTwo:
    'I have a love for problem solving and computers. Ranked high in many national championships (Mathematics and Computer Science).',
  paragraphThree:
    'I work diligently and am dedicated to writing maintainable code.',
  resume: 'resume.pdf',
};

export const projectsData = [
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
    img: 'createrawvision.jpg',
    title: 'CreateRawVision',
    info: 'WordPress Website with member area.',
    info2: 'Currently supports over 100 members and over 1000 daily visitors.',
    url: 'https://createrawvision.de',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'minesweeper.jpg',
    title: 'Minesweeper with Solver',
    info:
      'This project is a simple minesweeper game with an automatic solver, which computes a probability distribution of mines.',
    info2: 'Press `P` for probabilities and `S` for solving according to probabilities.',
    url: 'https://josef37.github.io/minesweeper/built/',
    repo: 'https://github.com/Josef37/minesweeper',
  },
  {
    id: nanoid(),
    img: 'react-shop.jpg',
    title: 'React Shop',
    info: 'Learning React by building an e-commerce platform.',
    info2: 'Uses redux-toolkit and redux-saga.',
    url: 'https://react-shop-showcase.herokuapp.com/',
    repo: 'https://github.com/Josef37/react-shop',
  },
  {
    id: nanoid(),
    img: 'post-planner.jpg',
    title: 'Post Planner',
    info: 'An Electron app for managing posts for social media across different profiles.',
    info2: `I've done this project without any framework, which got me to respect the value those frameworks provide. 😄`,
    url: '',
    repo: 'https://github.com/Josef37/post-planner',
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
];

const linkedinUrl = 'https://www.linkedin.com/in/josef-wittmann/';

export const contactData = {
  cta: 'Would you like to work with me?',
  btn: 'Send Me a Message',
  btnUrl: linkedinUrl,
};

export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: linkedinUrl,
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Josef37',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
