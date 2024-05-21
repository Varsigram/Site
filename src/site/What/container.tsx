import React from 'react';

export interface IWhatContainerProps {
    image: string;
    title: string;
    content: string;
}

// style={{ width: '320px', height: '250px' }} 

export const WhatContainer: React.FC<IWhatContainerProps> = ({ image, title, content }) => {
    return (
        <div className='bg-white flex h-60 lg:h-60 lg:w-96 flex-col justify-center rounded-xl shadow-lg'>
            <div className='flex justify-center'>
                <img src={image} alt={title} />
            </div>
            <div className='space-y-3 flex flex-col justify-center pt-6'>
                <p className='text-center font-bold'>{title}</p>
                <p className='text-center mx-2'>{content}</p>
            </div>
        </div>
    );
};


