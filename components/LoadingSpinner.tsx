import React from 'react';
import CircleLoader from 'react-spinners/RotateLoader';

const LoadingSpinner = () => {
    return (
        <div className="bg-black flex justify-center items-center h-screen">
            <CircleLoader color="#ffffff" size={20} loading={true} />
        </div>
    );
};

export default LoadingSpinner;
