import { ImHtmlFive } from 'react-icons/im'
import { DiCss3 } from 'react-icons/di'
import { SiJavascript, SiJquery, SiGraphql, SiReact, SiMysql, SiMongodb, SiExpress, SiHandlebarsdotjs, SiChakraui} from 'react-icons/si'
import { FaNode } from 'react-icons/fa'
import { BsBootstrap } from 'react-icons/bs'
import netflixGrillPic from '../Assets/netflix-grill.png'
import localFarmers from '../Assets/localFarmers.PNG'
import blackJack from '../Assets/blackJack.PNG'
import onlyPlants from '../Assets/onlyPlants.PNG'
import portfolio from '../Assets/portfolio.PNG'

export const projectsArray = [
    {
        title:'Netflix & Grill',
        description: 'The goal of the project was to solve two problems that every couple have on a regular basis. Those being what are we going to eat? What should we watch on TV tonight? With this app we take in a few responses from the end user and based on their responses to the three questions we generate a movie based on their prefernce when it comes to film genre. As well as a meal that meets their minimum servings based on how many people the user imputs.',
        deploy: 'https://alexanderleino.github.io/Netflix-and-Grill/',
        repository: 'https://github.com/AlexanderLeino/Netflix-and-Grill',
        icons: [<ImHtmlFive/>, <SiJavascript/>, <DiCss3/>],
        image: netflixGrillPic,
        tags: ['frontEnd', 'all'],
        deploy:'https://alexanderleino.github.io/Netflix-and-Grill/',
        code:'https://github.com/AlexanderLeino/Netflix-and-Grill'
    },
    {
        title:'Black Jack',
        description: 'The goal of the project was to focus on writing dense programming logic when I first started writing code as well as focus on heavy DOM manipulation by creating each individual card using BootStrap, CSS, vanilla javascript. This project is still a work in progress. Currently working on making the ui responsive for mobile devices. Currently responsive for everything up to laptops! Have fun! ',
        deploy: 'https://alexanderleino.github.io/Netflix-and-Grill/',
        repository: 'https://github.com/AlexanderLeino/Netflix-and-Grill',
        icons: [<ImHtmlFive/>, <SiJavascript/>, <DiCss3/>, <BsBootstrap/>],
        image: blackJack,
        tags: ['frontEnd', 'all'],
        deploy:'https://alexanderleino.github.io/blackjack-game/',
        code:'https://github.com/AlexanderLeino/blackjack-game'
    },
    {
        title:'Your Local Farmer',
        description: 'This was the capstone project for my coding bootcamp. The goal of the project was to build a fullstack application within react. We build the backend using mongodb and used GraphQL to authenticate, render and save data. We also wanted to experiment with using a component library that we have never used before. We chose to use Chakra UI because it aheres to WAI-ARIA standards for accessiblity.  ',
        deploy: 'https://alexanderleino.github.io/Netflix-and-Grill/',
        repository: 'https://github.com/AlexanderLeino/Netflix-and-Grill',
        icons: [<ImHtmlFive/>, <SiJavascript/>, <DiCss3/>, <FaNode/>, <SiExpress/>, <SiReact/>, <SiGraphql/>, <SiMongodb/>, <SiChakraui/>],
        image: localFarmers,
        tags: ['fullStack', 'all'],
        deploy: 'https://github.com/tevissaur/your-local-farmers',
        code: 'https://your-local-farmers.herokuapp.com'

    },

    {
        title:'Only Plants',
        description: 'This was my bootcamps teams 2nd project where the focus was creating an app where individuals can create posts, create an account and sign in using the npm bycrpt to authinicate the user.',
        deploy: 'https://alexanderleino.github.io/Netflix-and-Grill/',
        repository: 'https://github.com/AlexanderLeino/Netflix-and-Grill',
        icons: [<ImHtmlFive/>, <SiJavascript/>, <DiCss3/>, <BsBootstrap/>, <SiMysql/>, <SiHandlebarsdotjs/>, <FaNode/>, <SiExpress/>],
        image: onlyPlants,
        tags: ['fullStack', 'all'],
        deploy: 'https://only-plants.herokuapp.com/',
        code: 'https://github.com/sarahmaskill/only-plants/deployments/activity_log?environment=only-plants'
    },

    {
        title:'My Portfolio',
        description: 'I built this portfolio to showcase my previous works. The Goal of the project was to create and implement a dark and light theme, I also wanted to use HashNodes api to get all of my previous blog posts and have them visible under the articles tab',
        deploy: 'https://alexanderleino.github.io/Netflix-and-Grill/',
        repository: 'https://github.com/AlexanderLeino/Netflix-and-Grill',
        icons: [<ImHtmlFive/>, <SiJavascript/>, <DiCss3/>, <BsBootstrap/>],
        image: portfolio,
        tags: ['frontEnd', 'all'],
        deploy:'',
        code:'https://github.com/AlexanderLeino/react-bootstrap-portfolio'
    },
    


]