import { nanoid } from 'nanoid';

export const headData = {
  title: 'Josef Wittmann | Software Developer',
  lang: 'en',
  description: 'Portfolio website of Josef Wittmann showcasing some projects',
};

export const heroData = {
  title: 'Hi, my name is',
  name: 'Josef Wittmann',
  subtitle1: `I'm a Software Developer`,
  subtitle2: `and B.Sc. in Mathematics`,
  cta: 'Curious to know more?',
};

export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Undergrad in mathematics (major) and computer science (minor). Finishing February 2021`,
  paragraphTwo:
    'Love for problem solving and computers. Ranked high in many national chamionships (mathematics and computer science).',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php',
};

export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'CreateRawVision',
    info: 'WordPress Website with member area.',
    info2: '',
    url: 'https://createrawvision.de',
    repo: 'https://github.com/createrawvision/createrawvision',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Minesweeper with Solver',
    info:
      'This project is a simple minesweeper game with an automatic solver, which computes a probability distribution of mines.',
    info2: 'Press `P` for probabilities and `S` for solving according to probabilities',
    url: 'https://josef37.github.io/minesweeper/built/',
    repo: 'https://github.com/Josef37/minesweeper',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'React Shop',
    info: 'Learning React by building an e-commerce platform',
    info2: 'uses redux-toolkit and redux-saga',
    url: 'https://react-shop-showcase.herokuapp.com/',
    repo: 'https://github.com/Josef37/react-shop',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Post Planner',
    info: 'An Electron app for managing posts for social media across different profiles',
    info2: `I've done this project without any framework, which got me to respect the value those frameworks provide 😄`,
    url: '',
    repo: 'https://github.com/Josef37/post-planner',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Google Coding Competitions',
    info: `Attempting Google's Coding Competitions with my favorite scientific programming language: Julia!`,
    info2: `Qualified for Round 2 in 2020, but couldn't participate due to family matters`,
    url: '',
    repo: 'https://github.com/Josef37/google-coding-competitions',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Mailchimp Inactive Subscriber Cleaning',
    info: `Remove inactive subscribers by sending a campaign with a confirmation link to tagged subscribers`,
    info2: '',
    url: '',
    repo: 'https://github.com/Josef37/mailchimp-subscriber-cleaning',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Three.js Voxel Game',
    info: `Learning 3D with three.js by building a voxel game`,
    info2: '',
    url: '',
    repo: 'https://github.com/Josef37/socketio-chat',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: 'Send Me an E-Mail',
  email: 'josef.wittmann@tutanota.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/josef-wittmann-96a342195/',
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
