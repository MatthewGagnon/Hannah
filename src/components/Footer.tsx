import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
    const socialLinks = [
        {
            icon: Instagram,
            url: 'https://instagram.com/beanilee',
            label: 'Instagram'
        },
        {
            icon: Twitter,
            url: 'https://twitter.com/',
            label: 'Twitter'
        },
        {
            icon: Facebook,
            url: 'https://facebook.com/',
            label: 'Facebook'
        }
    ];
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-[#fff0c7] text-[#5f7055] p-4 shadow-sm">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                <div className="flex gap-4 order-1 md:order-1">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                            aria-label={social.label}
                        >
                            <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#c09173] transition-colors duration-300 group-hover:bg-[#c09173]">
                                <social.icon
                                    size={20}
                                    className="text-[#c09173] group-hover:text-[#fff0c7] transition-colors duration-300"
                                />
                            </div>
                        </a>
                    ))}
                </div>
                <p className="font-primary text-center order-2 md:order-1">&copy; {currentYear} Hannah Ezwawi. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;