import React from 'react';

const Shop: React.FC = () => {
    return (
        <div>
            <h2 className="text-3xl font-secondary mb-6">Shop</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Placeholder for shop items */}
                <div className="border p-4 bg-white">
                    <h3 className="text-xl">Art Print</h3>
                    <p>$49.99</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;