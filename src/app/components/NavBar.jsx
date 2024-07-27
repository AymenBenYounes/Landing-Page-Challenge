'use client'
import { useState, useEffect } from "react";
import { FaBars } from 'react-icons/fa';
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
    weight: ["700", "900"],
    subsets: ['latin']
})
const NavBar = () => {
    const [opened, setOpened] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateImageSrc = () => {
            setIsMobile(window.innerWidth < 640);
        };

        // Set initial state
        updateImageSrc();

        // Add event listener
        window.addEventListener('resize', updateImageSrc);

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', updateImageSrc);
    }, []);
    const imageurl = isMobile ? './mobile/image-header.jpg' : './desktop/image-header.jpg';
    return (
        <div className="bg-cover bg-center h-mobileNav relative flex flex-col align-center text-center" style={{ backgroundImage: `url(${imageurl})` }}>
            <header className="pt-5">
                <nav className="w-nav mx-auto py-2 flex justify-between items-center">
                    <img src="./logo.png" />
                    <div className="relative">
                        <ul className="justify-between align-center hidden sm:flex top-full left-0 mt-2">
                            {['About', 'Services', 'Projects', 'Contact'].map((item) => (
                                <li
                                    key={item}
                                    className={`cursor-pointer text-xl mx-4 hover:rounded-full hover:py-2 hover:px-5 transform hover:-translate-y-1 hover:text-VeryDarkDBlue hover:bg-White ${fraunces.className}`}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <FaBars className="cursor-pointer block sm:hidden text-2xl" onClick={() => setOpened(prevState => !prevState)} />
                </nav>
            </header>

            {opened && (<div className="py-5 absolute top-20 left-10 mt-2 w-clientSection  bg-White shadow-lg z-10">
                <div className="flex justify-center align-center">
                    <ul className="py-6 flex flex-col gap-5 justify-between align-center text-DarkGrayishBlue font-medium">
                        {['About', 'Services', 'Projects', 'Contact'].map((item) => (
                            <li key={item} className={`cursor-pointer text-xl hover:py-3 hover:px-6 hover:text-DarkGrayishBlue hover:rounded-full hover:bg-Yellow hover:text-VeryDarkDBlue hover:${fraunces.className}`}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>)}

            <div className={`w-nav mx-auto pt-10 tracking-space text-3xl font-extrabold ${fraunces.className} flex flex-col justify-between align-center`} >
                <h1 className="text-center">WE ARE CREATIVES</h1>
                <img className="self-center pt-mobile sm:pt-minidesktop 2xl:pt-desktop" src="./icon-arrow-down.svg" />
            </div>
        </div>
    )
}

export default NavBar

