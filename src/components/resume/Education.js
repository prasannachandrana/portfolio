import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="py-12 font-titleFont flex gap-20"
        >
            <div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl font-bold">Education</h2>
                </div>
                <div className="mt-14 w-[900px] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="B.TECH - Computer Science and Engineering"
                        subTitle="Chaitanya Engineering College, Visakhapatnam"
                        result="7.0/10 CGPA"
                        des="2019 - 2023"
                    />
                    <ResumeCard
                        title="Intermediate"
                        subTitle="Narayana Junior College, Visakhapatnam"
                        result="8.3/10 CGPA"
                        des="2017 - 2019"
                    />
                    <ResumeCard
                        title="SSC"
                        subTitle="Andhra University English Medium High School, Visakhapatnam"
                        result="8.0/10 CGPA"
                        des="2016 - 2017"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Education;
