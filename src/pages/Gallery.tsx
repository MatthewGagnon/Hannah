import React from 'react';
import CoolGirls from '../assets/images/CoolGirls.jpeg'
import Adventure from '../assets/images/Adventure.jpeg'
import Angwee from '../assets/images/Angwee.jpeg'
import Kiss from '../assets/images/Kiss.jpeg'
import Love from '../assets/images/Love.jpeg'
import Mariam from '../assets/images/Mariam.jpeg'
import Colors from '../assets/images/Colors.jpeg'
import Deep from '../assets/images/Deep.jpeg'
import Look from '../assets/images/Look.jpeg'
import Original from '../assets/images/Original.jpeg'
import Marlo from '../assets/images/Marlo.jpeg'
import Star from '../assets/images/Star.jpeg'
import Xfile from '../assets/images/Xfile.jpeg'
import Work from '../assets/images/Work.jpeg'
import Sisters from '../assets/images/Sisters.jpeg'
import Sword from '../assets/images/Sword.jpeg'
import Her from '../assets/images/Her.jpeg'
import Friend from '../assets/images/Friend.jpeg'

const Gallery: React.FC = () => {
    // Array of art image paths (replace with your own paths)
    const artImages = [
        CoolGirls,
        Adventure,
        Angwee,
        Kiss,
        Love,
        Mariam,
        Colors,
        Deep,
        Look,
        Original,
        Marlo,
        Star,
        Xfile,
        Work,
        Sisters,
        Sword,
        Her,
        Friend
    ];

    return (
        <div>
            <h2 className="text-3xl font-secondary mb-6">Art Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {artImages.map((image, index) => (
                    <div key={index} className="bg-accent1-200 flex justify-center">
                        <img src={image} alt={`Artwork ${index + 1}`} className="object-contain" style={{ height: '300px', width: '300px' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
