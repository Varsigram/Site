import React, { lazy, Suspense } from 'react';
import about from '../../assets/about.svg'

export const About: React.FC = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row m-8 mt-12 gap-8'>
            <div className='flex-1'>
                <img src={about} alt="" />
            </div>
            <div className='flex-1 space-y-5'>
            <p className="text-6xl font-semibold">About <br /><span className="text-green-600">Varsigram</span></p>
                <p>Varsigram is more than just a social media app; it's a hub for innovation, collaboration, and empowerment
                    within the university ecosystem. Founded with a vision to streamline communication, facilitate
                    academic excellence, and unlock the full potential of every member of the university community.
                    Varsigram is committed to redefining the student experience.</p>
            </div>
        </div>
    )
}


// export const LazyAbout = () => {
//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             <About />
//         </Suspense>
//     )
// }

// export const lazyAbout = lazy(() => <About />)