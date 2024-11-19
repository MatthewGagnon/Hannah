import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { isMobile, isTablet } from "react-device-detect";
import SkaterOne from '../assets/images/Skater1.jpg'
import SkaterTwo from '../assets/images/Skater2.jpg'
import SkaterThree from '../assets/images/Skater3.jpg'
import Hero from '../assets/images/Hero.png'

const Home: React.FC = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const deviceType = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";

    return (
        <div className="bg-background text-primary font-primary">
            {/* Hero Section */}
            <section className="flex flex-col lg:flex-row items-center justify-center p-8 lg:p-16">
                <div className="lg:w-1/4 w-1/2 mb-2 lg:mb-0">
                    <img
                        src={Hero}
                        alt="Placeholder Art"
                        className=""
                    />
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl font-secondary mb-4">Welcome to My Artistic Journey</h1>
                    <p className="mb-4">
                        Discover a world of creativity and natural inspiration through my art.
                    </p>
                    <button className="bg-accent1 text-text px-6 py-2 rounded shadow hover:bg-accent2 transition">
                        Explore My Gallery
                    </button>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-accent1 text-text py-8 text-center">
                <p className="text-xl mb-4">Find unique art pieces in the shop!</p>
                <button className="bg-white text-accent1 px-6 py-2 rounded shadow hover:bg-accent1 hover:text-text transition">
                    Go to Shop
                </button>
            </section>

            <div className="max-w-xl mx-auto px-4">
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="px-2"
                >
                    <div className="relative pb-[56.25%] h-[30vh]"> {/* 16:9 aspect ratio */}
                        <img src={SkaterOne} alt="Skater 1" className="absolute inset-0 w-full h-full object-contain" />
                    </div>
                    <div className="relative pb-[56.25%] h-[30vh]">
                        <img src={SkaterTwo} alt="Skater 2" className="absolute inset-0 w-full h-full object-contain" />
                    </div>
                    <div className="relative pb-[56.25%] h-[30vh]">
                        <img src={SkaterThree} alt="Skater 3" className="absolute inset-0 w-full h-full object-contain" />
                    </div>
                    <div className="relative pb-[56.25%] h-[30vh]">
                        <img src={SkaterThree} alt="Skater 3" className="absolute inset-0 w-full h-full object-contain" />
                    </div>
                    <div className="relative pb-[56.25%] h-[30vh]">
                        <img src={SkaterTwo} alt="Skater 2" className="absolute inset-0 w-full h-full object-contain" />
                    </div>
                    <div className="relative pb-[56.25%] h-[30vh]">
                        <img src={SkaterOne} alt="Skater 1" className="absolute inset-0 w-full h-full object-contain" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Home;