import React from 'react';

const Contact: React.FC = () => {
    return (
        <div>
            <h2 className="text-3xl font-secondary mb-6">Contact</h2>
            <form className="max-w-md mx-auto">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 mb-4 border border-custom-text"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 mb-4 border border-custom-text"
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full p-2 mb-4 border border-custom-text"
                    rows={4}
                ></textarea>
                <button
                    type="submit"
                    className="bg-custom-text text-custom-background px-4 py-2"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;