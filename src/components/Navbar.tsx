import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HannahLogo from '../assets/images/HannahLogo.png';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="bg-[#fff0c7] text-[#5f7055] p-4 shadow-sm">
            <div className="container mx-auto">
                {/* Desktop Navigation */}
                <div className="flex justify-between items-center">
                    {/* Logo/Image Area */}
                    <Link to="/" className="flex items-center">
                        <div className="h-24">
                            <img
                                src={HannahLogo}
                                alt="Artist Logo"
                                className="w-full h-full"
                            />
                        </div>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2"
                    >
                        <div className="space-y-2">
                            <span className={`block w-8 h-0.5 bg-[#5f7055] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                            <span className={`block w-8 h-0.5 bg-[#5f7055] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-8 h-0.5 bg-[#5f7055] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                        </div>
                    </button>

                    {/* Desktop Menu Items */}
                    <div className="hidden md:flex space-x-8">
                        {['Home', 'Gallery', 'Shop', 'About', 'Contact'].map((route) => {
                            const path = route === 'Home' ? '/' : `/${route.toLowerCase()}`;
                            const isActive = location.pathname === path;

                            return (
                                <Link
                                    key={route}
                                    to={path}
                                    className={`relative font-secondary text-lg group ${isActive ? 'text-[#5f7055]' : ''}`}
                                >
                                    {route}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c09173] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="pt-4 space-y-4 text-center">
                        {['Home', 'Gallery', 'Shop', 'About', 'Contact'].map((route) => {
                            const path = route === 'Home' ? '/' : `/${route.toLowerCase()}`;
                            const isActive = location.pathname === path;

                            return (
                                <Link
                                    key={route}
                                    to={path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block font-secondary text-lg hover:text-[#c09173] transition-colors ${isActive ? 'text-[#c09173]' : ''}`}
                                >
                                    {route}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;