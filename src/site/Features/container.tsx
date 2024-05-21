export interface IFeatureContainerProps {
    data: {
        image: string;
        title: string;
        content: string;
        color: string;
    }
}

export const FeatureContainer: React.FC<IFeatureContainerProps> = (data) => {
    return (
        <div className="flex flex-col justify-center">
            <div className="bg-slate-100 rounded-t-3xl h-64">
                <img src={data.data.image} alt="" className="h-full w-full object" />
            </div>
            <div style={{ backgroundColor: data.data.color }} className="rounded-b-3xl h-48">
                <div className="m-4 space-y-4">
                    <p className="text-white text-2xl font-bold">{data.data.title}</p>
                    <p className="text-white font-semibold">{data.data.content}</p>
                </div>
            </div>

        </div>
    )
}