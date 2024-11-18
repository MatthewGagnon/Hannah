import React from 'react';

const Gallery: React.FC = () => {
    return (
        <div>
            <h2 className="text-3xl font-secondary mb-6">Art Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Placeholder for artwork thumbnails */}
                <div className="bg-custom-accent1 h-64"></div>
                <div className="bg-custom-accent2 h-64"></div>
                <div className="bg-custom-text h-64"></div>
            </div>
        </div>
    );
};

export default Gallery;