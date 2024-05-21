import missionImage from '../../assets/mission.svg'

export const Mission: React.FC = () => {
    return (
        <div className="flex flex-col text-center lg:text-left lg:flex-row p-12 gap-x-10 gap-6">
            <div className='flex-1'>
                <div className=''>
                    <p style={{ color: '#1E8127' }} className='font-semibold text-5xl mb-4'>Our Mission</p>
                    <p className=''>To provide a user-friendly, fast and secure platform that fosters a more interconnected,
                        supportive and well-informed campus – community, where every student thrives academically, discovers and showcases their unique talents, creativity and innovation,
                        and realizes their entrepreneurial
                        potential.</p>
                </div>
            </div>
            <div className='flex-1'>
                <img className='rounded-3xl object-fill w-full h-full' src={missionImage} alt="" />
            </div>
        </div>
    )
}