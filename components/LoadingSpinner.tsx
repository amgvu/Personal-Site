import React from 'react';
import CircleLoader from 'react-spinners/RingLoader';

const LoadingSpinner = () => {
    return (
        <div className="bg-black flex justify-center items-center h-screen">
            <CircleLoader color="#ffffff" size={100} loading={true} />
        </div>
    );
};

export default LoadingSpinner;
