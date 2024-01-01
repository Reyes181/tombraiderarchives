


const CardsSkeleton = () => {
    return(
        <div className="px-4 grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-10 xl:gap-6">
            <div className="mb-12 flex flex-col relative items-center md:items-start">
                <div className="bg-gray-200 w-4/5 h-96 md:w-full md:h-52 lg:h-64 xl:w-56 xl:h-80 animate-pulse"/>
            </div>
            <div className="mb-12 flex flex-col relative items-center md:items-start">
                <div className="bg-gray-200 w-4/5 h-96 md:w-full md:h-52 lg:h-64 xl:w-56 xl:h-80 animate-pulse"/>
            </div>
            <div className="mb-12 flex flex-col relative items-center md:items-start">
                <div className="bg-gray-200 w-4/5 h-96 md:w-full md:h-52 lg:h-64 xl:w-56 xl:h-80  animate-pulse"/>
            </div>
            <div className="mb-12 flex flex-col relative items-center md:items-start">
                <div className="bg-gray-200 w-4/5 h-96 md:w-full md:h-52 lg:h-64 xl:w-56 xl:h-80  animate-pulse"/>
            </div>
            <div className="mb-12 flex flex-col relative items-center md:items-start">
                <div className="bg-gray-200 w-4/5 h-96 md:w-full md:h-52 lg:h-64 xl:w-56 xl:h-80  animate-pulse"/>
            </div>
        </div>
    )
}

export default CardsSkeleton;