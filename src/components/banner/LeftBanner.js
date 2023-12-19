import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: [
            'Frontend Developer.',
            'MERN Stack Developer.',
            'FullStack Developer.',
        ],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
                <h1 className="text-6xl font-bold text-white">
                    Hi, I'm{' '}
                    <span className="text-designColor capitalize">
                        Chandrana Prasanna Lakshmi
                    </span>
                </h1>
                <h2 className="text-4xl font-bold text-white">
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    Seeking an entry-level role in full-stack web development.
                    B.Tech graduate in Computer Science was proficient in the
                    MERN stack (MongoDB, Express.js, React, Node.js). Dedicated
                    to delivering high-quality work and contributing to
                    organizational growth. Ready to bring my skills and
                    commitment to your team.
                </p>
            </div>
            {/* Media */}
            <Media />
        </div>
    );
};

export default LeftBanner;
