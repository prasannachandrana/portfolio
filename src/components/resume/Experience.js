import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="py-12 font-titleFont flex gap-20"
        >
            <div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl font-bold">
                        Internships & Trainings
                    </h2>
                </div>
                <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="fullStack Web Developer(MERN) intern - Lean and Build"
                        subTitle="May 2023 - June 2023"
                        result="Remote"
                        des="Developing my skills in JavaScript, React JS, and Node JS is my top priority, as I aim to utilize my knowledge to create impactful and user-friendly full-stack web applications that cater to the needs of diverse audiences."
                    />
                    <ResumeCard
                        title="FullStack Web Development - Cuvette Tech"
                        subTitle="July 2023 - Present"
                        result="Remote"
                        des=""
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Experience;
