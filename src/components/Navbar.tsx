import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-custom-text text-custom-background p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-secondary">Artist Name</Link>
                <div className="space-x-4">
                    {['Home', 'Gallery', 'Shop', 'About', 'Contact'].map((route) => (
                        <Link
                            key={route}
                            to={route === 'Home' ? '/' : `/${route.toLowerCase()}`}
                            className="hover:text-custom-accent1 transition-colors"
                        >
                            {route}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;