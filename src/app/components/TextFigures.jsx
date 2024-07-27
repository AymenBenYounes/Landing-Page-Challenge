'use client'
import { Fraunces } from "next/font/google";
import { Barlow } from "next/font/google";
import { useState, useEffect } from "react";

const barlow = Barlow({
    weight: ["600"],
    subsets: ['latin']
});

const fraunces = Fraunces({
    weight: ["700", "900"],
    subsets: ['latin']
})
const TextFigures = () => {
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

    const images = {
        desktop: [
            './desktop/image-transform.jpg',
            './desktop/image-stand-out.jpg',
            './desktop/image-graphic-design.jpg',
            './desktop/image-photography.jpg'
        ],
        mobile: [
            './mobile/image-transform.jpg',
            './mobile/image-stand-out.jpg',
            './mobile/image-graphic-design.jpg',
            './mobile/image-photography.jpg'
        ],
    };
    const imagesurl = isMobile ? images.mobile : images.desktop;
    return (
        <div className="flex flex-wrap flex-col sm:flex-row overflow-hidden">
            <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-6/12 mb-5 sm:mb-0 overflow-hidden sm:order-2">
                    <img src={imagesurl[0]} className="w-full h-full object-cover" />
                </div>
                <div className="mb-10 sm:mb-0 text-VeryDarkDBlue p-6 w-full sm:w-6/12 sm:shrink sm:order-1 flex items-center justify-center">
                    <div className="text-center sm:text-left sm:w-middle mx-auto">
                        <h1 className={`text-3xl mt-5 font-extrabold ${fraunces.className}`}>Transform your brand</h1>
                        <p className={`py-5 font-bold text-DarkGrayishBlue ${barlow.className}`}>
                            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
                        </p>
                        <span className={`cursor-pointer underline hover:underline-offset-8 decoration-Yellow block text-md uppercase font-extrabold ${fraunces.className}`}>Learn more</span>
                    </div>
                </div>
            </div>
            <div className="relative w-full sm:w-6/12 mb-10 sm:mb-0 overflow-hidden">
                <img src={imagesurl[1]} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-center mb-10 sm:mb-0 text-VeryDarkDBlue p-6 w-full sm:w-6/12">
                <div className="text-center sm:text-left sm:w-middle mx-auto">
                    <h1 className={`text-3xl font-extrabold ${fraunces.className}`}>Stand out to the right audience</h1>
                    <p className={`py-5 font-bold text-DarkGrayishBlue ${barlow.className}`}>
                        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
                    </p>
                    <span className={`cursor-pointer underline hover:underline-offset-8 decoration-softRed block text-md uppercase font-extrabold  ${fraunces.className}`}>Learn more</span>
                </div>
            </div>

            <div className="relative w-full sm:w-6/12 overflow-hidden">
                <img src={imagesurl[2]} className="w-full h-full object-cover" />
                <div className="text-DarkCyan absolute bottom-0 pb-10 w-full flex flex-col items-center justify-center bg-opacity-50 text-DarkCyan">
                    <h1 className={`text-center text-3xl sm:text-lg md:text-2xl lg:text-3xl sm:pt-2 lg:pt-0 font-extrabold ${fraunces.className}`}>Graphic design</h1>
                    <p className={`text-center py-5 sm:py-2 font-bold sm:text-xs md:text-base lg:text-xl ${barlow.className}`}>
                        Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
                    </p>
                </div>
            </div>
            <div className="relative w-full sm:w-6/12 overflow-hidden">
                <img src={imagesurl[3]} className="w-full h-full object-cover" />
                <div className="text-DarkBlue absolute bottom-0 pb-10 w-full flex flex-col items-center justify-center bg-opacity-50  text-DarkBlue">
                    <h1 className={`text-center text-3xl sm:text-lg lg:pt-0 md:text-2xl lg:text-3xl  font-extrabold ${fraunces.className}`}>Photography</h1>
                    <p className={`text-center py-5 sm:py-2 font-bold sm:text-xs md:text-base lg:text-xl ${barlow.className}`}>
                        Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default TextFigures
