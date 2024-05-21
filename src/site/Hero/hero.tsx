import hero from '../../assets/hero.svg'

export const Hero: React.FC = () => {
    return (
        <div className='flex flex-col lg:flex-row m-8 gap-6'>
            <div className='flex-1 space-y-5'>
                <p className="text-6xl font-semibold">Uniting the <span className="text-green-600">University <br />Community.</span></p>
                <p>Our platform is designed to revolutionize the way you experience campus life, bringing together
                    academic tools, event management, talent
                    showcasing, and marketplace features in one convenient app. Discover the endless possibilities
                    with Varsigram!</p>
            </div>
            <div className='flex-1'>
                <img className='rounded-3xl' src={hero} alt="" />
            </div>
        </div>
    )
}