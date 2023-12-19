import React from 'react';
import Title from '../layouts/Title';
import {
    projectOne,
    projectTwo,
    projectThree,
    projectFour,
    projectFive,
    projectSix,
} from '../../assets/index';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des="My Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectsCard
                    title="Pocket Notes"
                    des=" Created a React-based Note-taking App for a module test, featuring group creation, auto-saving notes with local storage, and metadata tracking for an intuitive user experience."
                    src={projectOne}
                    githubLink="https://github.com/prasannachandrana/react-capstone-project"
                    liveLink="https://cuvette-react-module-test.netlify.app/"
                />
                <ProjectsCard
                    title="Advanced To-do List"
                    des=" Developed digital clock using javascript and bootstrap,Learned fundamental concepts in javascript"
                    src={projectTwo}
                    githubLink="https://github.com/prasannachandrana/to-do-list"
                    liveLink="https://react-to-do-list-advanced.netlify.app/"
                />
                <ProjectsCard
                    title="Rock Paper Scissors"
                    des="a simple rock paper scissors game built for module test in cuvette which was built with html, css and javascript."
                    src={projectThree}
                    githubLink="https://github.com/prasannachandrana/Cuvette-Js-Module-Test"
                    liveLink="https://prasannachandrana.github.io/Cuvette-Js-Module-Test/"
                />
                <ProjectsCard
                    title="Super App"
                    des='Super App" is a React-based web application delivering a seamless user experience with features like user registration, category selection, weather updates, news feeds, notes, timers, and entertainment browsing via external APIs.'
                    src={projectFour}
                    githubLink="https://github.com/prasannachandrana/react-capstone-project"
                    liveLink="https://github.com/prasannachandrana/react-capstone-project"
                />
                <ProjectsCard
                    title="Credit Card Generator"
                    des="A Simple credit card generator built with React and TailwindCSS with form validation support."
                    src={projectFive}
                    githubLink="https://github.com/prasannachandrana/Cuvette-react-micro-project-1"
                    liveLink="https://github.com/prasannachandrana/Cuvette-react-micro-project-1"
                />
                <ProjectsCard
                    title="LMS Portal - fullstack project"
                    des="a complete MERN stack based project based on selling online courses and accessing them in the portal."
                    src={projectSix}
                    githubLink="#"
                    liveLink="#"
                />
            </div>
        </section>
    );
};

export default Projects;
