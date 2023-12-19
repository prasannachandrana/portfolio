import React from 'react';
import { FaLinkedinIn, FaReact, FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiExpress } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const Media = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    Find me in
                </h2>
                <div className="flex gap-4">
                    <span className="bannerIcon">
                        <a
                            href="https://www.linkedin.com/in/prasanna-chandrana/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedinIn />
                        </a>
                    </span>
                    <span className="bannerIcon">
                        <a
                            href="https://github.com/prasannachandrana"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub />
                        </a>
                    </span>
                </div>
            </div>
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    BEST SKILL ON
                </h2>
                <div className="flex gap-4">
                    <span className="bannerIcon">
                        <IoLogoJavascript />
                    </span>
                    <span className="bannerIcon">
                        <FaReact />
                    </span>
                    <span className="bannerIcon">
                        <FaNode />
                    </span>
                    <span className="bannerIcon">
                        <SiExpress />
                    </span>
                    <span className="bannerIcon">
                        <SiMongodb />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Media;
