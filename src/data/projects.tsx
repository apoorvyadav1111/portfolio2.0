import karyaImg from "../assets/images/karya.png";
import jobHuntSidekickImg from "../assets/images/job-hunt-sidekick.png";
import portfolioImg from "../assets/images/portfolio.png";
import mannImg from "../assets/images/mann.png";
import buQuizImg from "../assets/images/bu-quiz.jpeg";
import reactionTimerImg from "../assets/images/reaction-timer.png";




export type ProjectType = {
    name: string;
    description: string;
    image: string;
    tags: string[];
    url?: string;
    type: string;
    github: string;
};

export const featuredProject: ProjectType = {
    name: "Project Management System: Karya",
    description: "A web app that helps teams manage their projects and tasks.",
    image: karyaImg,
    tags: ["Vue", "Typescript", "Node.js", "Express", "MongoDB", "Material UI", "GraphQL"],
    type:"Full Stack Web App",
    github: "https://github.com/apoorvyadav1111/karya-client",
    url:"https://github.com/apoorvyadav1111/karya-client",
};

export const projects: ProjectType[] = [
    {
        name: "Job Hunt Sidekick",
        description:"A web app that helps job seekers keep track of their job applications and interviews.",
        image: jobHuntSidekickImg,
        tags: ["Vue", "TypeScript", "Node.js", "Express", "MongoDB", "Material UI"],
        type:"Full Stack Web App",
        github: "https://github.com/apoorvyadav1111/job-hunt-sidekick",
        url:"https://github.com/apoorvyadav1111/job-hunt-sidekick"
    },
    {
        name: "Portfolio",
        description:"My personal portfolio website.",
        image: portfolioImg,
        tags: ["React", "TypeScript", "Styled Components", "Framer Motion"],
        type:"Frontend Web App",
        github: "",
        url:""
    },
    {
        name: "Mann",
        description:"A web app backend using python, django, django rest framework and graphql designed for a social media app.",
        image: mannImg,
        tags: ["Python", "Django", "Django Rest Framework", "GraphQL"],
        type:"Backend Web App",
        github: "https://github.com/apoorvyadav1111/mann-backend",
        url:"https://github.com/apoorvyadav1111/mann-backend"
    },
    {   
        name:"BU Quiz",
        description:"A web app that helps students provides them with a platform to create and take quizzes",
        image: buQuizImg,
        tags: ["Vue", "Javascript", "Node.js", "Express", "MongoDB", "Material UI"],
        type:"Full Stack Web App",
        github: "https://github.com/ayadav16/Hackathon",
        url: "https://github.com/ayadav16/Hackathon"
    },
    {
        name:"Reaction Timer Game",
        description:"A web app that tests your reaction time.",
        image: reactionTimerImg,
        tags: ["Vue"],
        type:"Frontend Web App",
        github: "https://github.com/apoorvyadav1111/reaction-timer-vue",
        url: "https://github.com/apoorvyadav1111/reaction-timer-vue"
    }
];

export default projects;

