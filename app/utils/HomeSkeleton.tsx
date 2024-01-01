import RippedBackground from "./RippedBackground";
import Banner from "../components/Banner";
const HomeSkeleton = () => {
    return(
        <div className="flex flex-col">
            <section className="relative max-w-[2520px] mx-auto h-fit w-full">
                <div className="bg-gray-200 animate-pulse w-full h-102"/>
            </section>
            <RippedBackground option="1"/>
            <div className="relative w-full h-fitf lex flex-col xl:px-20 md:px-10 sm:px-2 px-4 py-8">
                <div className="w-full flex flex-col sm:py-5">
                    <div className="flex flex-col p-28 lg:p-44 bg-gray-200 animate-pulse rounded-lg"/>
                </div>
                <div className="w-full h-fit py-4">
                    <div className="w-full h-102 bg-gray-200 animate-pulse rounded-lg"/>
                </div>
            </div>
            <RippedBackground option="2"/>
            <div className="relative w-full h-fit flex flex-col xl:px-20 md:px-10 sm:px-2 px-4 py-8">
                <div className="w-full flex flex-col sm:py-5 mb-6 lg:mb-0">
                        <div className="flex flex-col p-28 lg:p-32 bg-gray-200 animate-pulse rounded-lg"/>
                </div>

                <div className="h-fit lg:h-100 md:px-4 grid grid-cols-1 md:grid-cols-5 gap-6">
                    <div className="flex items-center justify-center relative col-span-3 rounded-lg bg-gray-200 animate-pulse h-100 md:h-72 lg:h-100"/>
                    <div className="col-span-2 flex flex-col h-full py-4 md:py-0 w-full">
                        <div className="bg-gray-200 animate-pulse w-full h-10 rounded-lg"/>
                        <div className="py-10 md:py-4">
                            <div className="bg-gray-200 animate-pulse h-32 mb-6 pb-5 md:pb-1 lg:pb-3 w-full rounded-lg"/>
                            <div className="bg-gray-200 animate-pulse h-32 pb-5 md:pb-1 lg:pb-3 w-full rounded-lg"/>
                        </div>
                        <div className="bg-gray-200 animate-pulse w-full h-16"/>
                    </div>
                </div>
            </div>
            <Banner/>
        </div>
    )
}

export default HomeSkeleton