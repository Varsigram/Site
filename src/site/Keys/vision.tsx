import visionImage from '../../assets/vision.svg'

export const Vision: React.FC = () => {
    return (
        <div className="flex flex-col text-center lg:text-left lg:flex-row-reverse p-12 gap-x-10 gap-6">
            <div className='flex-1'>
                <div className=''>
                    <p style={{ color: '#1E8127' }} className='font-semibold text-5xl mb-4'>Our Vision</p>
                    <p className=''>To become the top go-to platform for all university related activities, a catalyst for academic excellence, talent recognition, and entrepreneurial growth for University of Lagos, other Tertiary Institutions in Nigeria and Worldwide.</p>
                </div>
            </div>
            <div className='flex-1'>
                <img className='rounded-3xl object-fill w-full h-full' src={visionImage} alt="" />
            </div>
        </div>
    )
}