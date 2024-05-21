import { FeatureContainer, IFeatureContainerProps } from "./container"
import React from 'react';
import academic from '../../assets/academic.svg'
import information from '../../assets/information.svg'
import event from '../../assets/event.svg'
import talent from '../../assets/talent.svg'
import marketplace from '../../assets/marketplace.svg'
import blog from '../../assets/blog.svg'


export const Features: React.FC = () => {
    const data: IFeatureContainerProps[] = [{
        data: {
            image: academic,
            title: "Academic Tools",
            color: '#1E8127',
            content: "Get resources that would aid your exam preparation and equip you with the adequate knowledge required for you to ace your exams."
        }
    },
    {
        data: {
            image: information,
            title: "Instant Access to Information.",
            color: '#3FCF4B',
            content: "Get optimal information directly from verified sources without relying on anybody or a group to feed you with information."
        }
    },
    {
        data: {
            image: event,
            title: "Event Management",
            color: '#1E8127',
            content: "From academic conferences to student club meetings, Varsigram's Event Management feature makes planning and organizing events a breeze. Create, promote and RSVP to events with ease."
        }
    },
    {
        data: {
            image: talent,
            title: "Talent Showcase",
            color: '#3FCF4B',
            content: "Whether you're an artist or a budding entrepreneur, Varsigram provides platform to share your passions and connect with like-minded individuals. Create and post content."
        }
    },
    {
        data: {
            image: marketplace,
            title: "Marketplace (UniShop)",
            color: '#1E8127',
            content: "Buy, sell, and exchange goods and services within the university community.  Varsigram's virtual marketplace makes it easy to find what you need and connect with local sellers."
        }
    },
    {
        data: {
            image: blog,
            title: "Blog/News",
            color: '#3FCF4B',
            content: "Stay informed with the latest news and insights from the Varsigram team. Our blog features articles, interviews and guest posts covering a wide range of topics, from education and innovation to entrepreneurship and campus life."
        }
    }]
    return (
        <div className="justify-center pt-12">
            <div>
                <div className="space-y-6">
                    <p className="text-center text-3xl font-semibold"><span className="text-green-600">Explore</span> our Incredible Features.</p>
                    <p className="hidden lg:block text-center text-2xl font-light">
                        Our platform is designed with amazing features with the goal to build a user-centered<br />
                        product that satisfies our users’ needs.
                    </p>
                    <p className="text-center text-2xl font-light lg:hidden">
                        Our platform is designed with amazing features with the goal to build a user-centered product that satisfies our users’ needs.
                    </p>
                </div>
                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 mx-4 mb-32 mt-16">
                    {data.map((feature, index) => (
                        <FeatureContainer data={feature.data} />
                    ))}
                </div>
            </div>
        </div>
    )
}