import { ImHtmlFive } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiGraphql,
  SiReact,
  SiMongodb,
  SiExpress,
  SiChakraui,
  SiMomenteo,
  SiStyledcomponents,
  SiMysql,
  SiHandlebarsdotjs,
  SiSequelize,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import netflixGrillPic from "../Assets/netflix-grill.png";
import localFarmers from "../Assets/localFarmers.PNG";
import blackJack from "../Assets/blackJack.PNG";
import portfolio from "../Assets/portfolio.PNG";
import weather from '../Assets/weather-app-picture.PNG'
import techBlog from '../Assets/tech-pic.PNG'


export const projectsArray = [
  {
    title: "Netflix & Grill",
    description:
      "The goal of the project was to solve two problems that every couple have on a regular basis. Those being what are we going to eat? What should we watch on TV tonight? With this app we take in a few responses from the end user and based on their responses to the three questions we generate a movie based on their prefernce when it comes to film genre. As well as a meal that meets their minimum servings based on how many people the user imputs.",
    deploy: "https://alexanderleino.github.io/Netflix-and-Grill/",
    repository: "https://github.com/AlexanderLeino/Netflix-and-Grill",
    icons: [<ImHtmlFive />, <SiJavascript />, <DiCss3 />],
    image: netflixGrillPic,
    tags: ["frontEnd", "all"],
    deploy: "https://alexanderleino.github.io/Netflix-and-Grill/",
    code: "https://github.com/AlexanderLeino/Netflix-and-Grill",
  },
  {
    title: "Black Jack",
    description:
      "The goal of the project was to focus on writing dense programming logic when I first started writing code as well as focus on heavy DOM manipulation by creating each individual card using BootStrap, CSS, vanilla javascript. This project is still a work in progress. Currently working on making the ui responsive for devices with a smaller screen size than a laptop. Have fun! ",
    deploy: "https://alexanderleino.github.io/Netflix-and-Grill/",
    repository: "https://github.com/AlexanderLeino/Netflix-and-Grill",
    icons: [<ImHtmlFive />, <SiJavascript />, <DiCss3 />, <BsBootstrap />],
    image: blackJack,
    tags: ["frontEnd", "all"],
    deploy: "https://alexanderleino.github.io/blackjack-game/",
    code: "https://github.com/AlexanderLeino/blackjack-game",
  },
  {
    title: "My Portfolio",
    description:
      "I built this portfolio to showcase my previous works. The goal of the project was to create and implement a dark and light theme, I also wanted to use HashNode's API to get all of my previous blog posts and have them visible under the articles tab.",
    deploy: "https://alexanderleino.github.io/Netflix-and-Grill/",
    repository: "https://github.com/AlexanderLeino/Netflix-and-Grill",
    icons: [<ImHtmlFive />, <SiJavascript />, <DiCss3 />, <BsBootstrap />],
    image: portfolio,
    tags: ["frontEnd", "all"],
    deploy: "https://alexanderleino.github.io/react-bootstrap-portfolio",
    code: "https://github.com/AlexanderLeino/react-bootstrap-portfolio",
  },
  {
    title: "Weather Dashboard",
    description:
      "I implemented the open weather api to obtain daily, weekly and historical forecasts. I made a simple express server to hide open weather api key. I used moment js to determine time of day based on the specific location. All components were built from scatch with styled components",
    deploy: "https://open-weather-react-app.herokuapp.com/",
    code: "https://github.com/AlexanderLeino/open-weather-react",
    repository: "https://github.com/AlexanderLeino/open-weather-react",
    icons: [<ImHtmlFive />, <SiJavascript />, <FaNode />, <SiExpress />,<SiReact /> ,'ChartJs', <SiMomenteo />, <SiStyledcomponents />
    ],
    image: weather,
    tags: ['frontEnd', 'all', 'fullStack']
  },
  {
    title: 'Tech Blog',
    description: 'One of my bootcamp project whereas we were asked to create a Full Stack Blog platform. Its is a very rudimentary implemenation where a user can view others blog posts, as well as login and create their own blog posts. A user can also update and delete their previous blog posts',
    deploy: "https://peaceful-lake-82679.herokuapp.com/",
    repository: 'https://github.com/AlexanderLeino/techblog-working',
    code: 'https://github.com/AlexanderLeino/techblog-working',
    icons: [
    <ImHtmlFive />, <SiJavascript />,<DiCss3 />, <SiMysql />, <SiHandlebarsdotjs />, <SiSequelize />],
    image: techBlog,
    tags: ['frontEnd', 'all', 'fullStack']
  },

];
