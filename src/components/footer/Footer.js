import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full h-full flex flex-col gap-8 text-center">
            <h3 className="text-xl uppercase text-designColor tracking-wider">
                Quick Link
            </h3>
            <div className="flex gap-6 justify-center">
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
    );
};

export default Footer;
