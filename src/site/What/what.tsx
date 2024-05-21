import React from 'react';
import { IWhatContainerProps, WhatContainer } from './container';
import communication from '../../assets/communication.svg';
import innovation from '../../assets/innovation.svg';
import collaboration from '../../assets/collaboration.svg';
import empowerment from '../../assets/empowerment.svg';

export const What: React.FC = () => {
    const data: IWhatContainerProps[] = [
        { image: communication, title: 'Effective Communication', content: 'User-friendly platform for sharing information, ideas and updates,' },
        { image: innovation, title: 'Innovation', content: 'Explore and develop new ideas, projects and initiatives. ' },
        { image: collaboration, title: 'Collaboration', content: 'Collaborate, and work together on academic projects, extracurricular activities and community initiatives.' },
        { image: empowerment, title: 'Empowerment', content: 'Mentorship programs, skill development workshops, and leadership opportunities' },
    ];

    return (
        <div className='bg-slate-100 py-16'>
            <div className='space-y-3'>
                <p className="text-center text-5xl font-semibold">What makes us <span className="text-green-600">Varsigram?</span></p>
                <p className='text-center text-2xl font-light'>These are our key objectives we wish to accomplish at Varsigram.</p>
            </div>
            <div className='flex flex-col justify-center lg:flex-row gap-6 my-6 mx-6'>
                {data.map((what, index) => (
                    <WhatContainer
                        key={index}
                        image={what.image}
                        title={what.title}
                        content={what.content}
                    />
                ))}
            </div>
        </div>
    );
};
