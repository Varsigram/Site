import React from 'react';
import x from '../../assets/x.svg';
import facebook from '../../assets/facebook.svg';
import insta from '../../assets/insta.svg';

export const Footer: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#3FCF4B' }} className="pb-10">
            <div>
                <p className='text-center text-white text-4xl font-semibold p-16'>An All-Inclusive University <br /> Community</p>
                <p className="border border-white mx-10"></p>
            </div>
            <div>
                <div className='mt-16 mb-8 ml-10'>
                    <p className='text-white font-semibold text-4xl'>Varsigram</p>
                </div>
                <div className='justify-center flex flex-col lg:flex-row gap-10 mb-12'>
                    <div className='flex justify-center'>
                        <ul className='flex flex-col gap-4'>
                            <p className='text-white text-2xl pb-2'>Company</p>
                            <li className='text-white'>About Us</li>
                            <li className='text-white'>Academics</li>
                            <li className='text-white'>Talent</li>
                            <li className='text-white'>Marketplace</li>
                        </ul>
                    </div>
                    <div className='flex justify-center'>
                        <ul className='flex flex-col gap-4'>
                            <p className='text-white text-2xl pb-2'>Support</p>
                            <li className='text-white'>Help Center</li>
                            <li className='text-white'>Contact Us</li>
                            <li className='text-white'>Terms and Conditions</li>
                            <li className='text-white'>Feedback</li>
                        </ul>
                    </div>
                    <div className='flex justify-center'>
                        <ul className='flex flex-col gap-4'>
                            <p className='text-white text-2xl pb-2'>Resources</p>
                            <li className='text-white'>Blog</li>
                            <li className='text-white'>Events</li>
                            <li className='text-white'>News</li>
                            <li className='text-white'>Campus</li>
                        </ul>
                    </div>
                    <div className='flex justify-center'>
                        <ul className='flex flex-col gap-4'>
                            <p className='text-white text-2xl pb-2'>Legal</p>
                            <li className='text-white'>Teams</li>
                            <li className='text-white'>Privacy</li>
                            <li className='text-white'>Cookies</li>
                            <li className='text-white'>Licenses</li>
                        </ul>
                    </div>
                </div>
                <p className="border border-white mx-10"></p>
                <div className='flex justify-between m-10'>
                    <div className='text-white'>&copy; Varsigram 2024, All Rights Reserved</div>
                    <div className='flex flex-row gap-4'>
                        <img src={x} alt="" />
                        <img src={facebook} alt="" />
                        <img src={insta} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}