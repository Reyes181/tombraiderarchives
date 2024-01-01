import RippedBackground from "./RippedBackground";
import Container from "../components/Container";
import Banner from "../components/Banner";

export default function DHSkeleton(){
    return(
        <div className="flex flex-col w-full h-full">
            <div 
                className="bg-gray-200 animate-pulse w-full h-10 flex justify-center items-center relative"
            />
            <RippedBackground option="1"/>
            <Container>
                <section className="w-full h-72 relative -mt-4 mb-4 xl:-mt-0 xl:mb-0 md:py-4 md:my-5 lg:py-0">
                    <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg"/>
                </section>

                <section className="relative flex flex-col justify-start w-full h-fit">
                    <div className="w-4/5 text-2xl md:text-xl font-normal capitalize flex flex-col">
                        <span>Arch One | 2014 - 2016</span>
                        <hr className="w-full h-0.5 bg-black"/>
                    </div>
                    <div className="relative md:max-w-[100%]">
                        <div className="w-full py-10 h-fit flex snap-x snap-mandatory overflow-x-auto space-x-2 scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
                            <div className={`animate-pulse bg-gray-200 slide w-full max-w-[15.5rem] md:max-w-[9.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem] h-96 md:h-52 lg:h-64 xl:h-80 flex-shrink-0 snap-center mb-12 cursor-pointer`}/>
                            <div className={`animate-pulse bg-gray-200 slide w-full max-w-[15.5rem] md:max-w-[9.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem] h-96 md:h-52 lg:h-64 xl:h-80 flex-shrink-0 snap-center mb-12 cursor-pointer`}/>
                            <div className={`animate-pulse bg-gray-200 slide w-full max-w-[15.5rem] md:max-w-[9.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem] h-96 md:h-52 lg:h-64 xl:h-80 flex-shrink-0 snap-center mb-12 cursor-pointer`}/>
                            <div className={`animate-pulse bg-gray-200 slide w-full max-w-[15.5rem] md:max-w-[9.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem] h-96 md:h-52 lg:h-64 xl:h-80 flex-shrink-0 snap-center mb-12 cursor-pointer`}/>
                            <div className={`animate-pulse bg-gray-200 slide w-full max-w-[15.5rem] md:max-w-[9.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem] h-96 md:h-52 lg:h-64 xl:h-80 flex-shrink-0 snap-center mb-12 cursor-pointer`}/>
                            <div className={`animate-pulse bg-gray-200 slide w-full max-w-[15.5rem] md:max-w-[9.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem] h-96 md:h-52 lg:h-64 xl:h-80 flex-shrink-0 snap-center mb-12 cursor-pointer`}/>
                        </div>
                    </div>
                </section>

                <section className="relative flex flex-col justify-start w-full h-fit">
                    <div className="w-4/5 text-2xl md:text-xl font-normal capitalize flex flex-col">
                        <span>Arch One | 2016 - 2017</span>
                        <hr className="w-full h-0.5 bg-black"/>
                    </div>
                    <div className="relative md:max-w-[100%]">
                        <div className="w-full py-10 h-fit flex snap-x snap-mandatory overflow-x-auto space-x-2 scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
                            <div className={`animate-pulse bg-gray-200 slide w-full max-w-[15.5rem] md:max-w-[9.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem] h-96 md:h-52 lg:h-64 xl:h-80 flex-shrink-0 snap-center mb-12 cursor-pointer`}/>
                            <div className={`animate-pulse bg-gray-200 slide w-full max-w-[15.5rem] md:max-w-[9.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem] h-96 md:h-52 lg:h-64 xl:h-80 flex-shrink-0 snap-center mb-12 cursor-pointer`}/>
                            <div className={`animate-pulse bg-gray-200 slide w-full max-w-[15.5rem] md:max-w-[9.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem] h-96 md:h-52 lg:h-64 xl:h-80 flex-shrink-0 snap-center mb-12 cursor-pointer`}/>
                            <div className={`animate-pulse bg-gray-200 slide w-full max-w-[15.5rem] md:max-w-[9.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem] h-96 md:h-52 lg:h-64 xl:h-80 flex-shrink-0 snap-center mb-12 cursor-pointer`}/>
                            <div className={`animate-pulse bg-gray-200 slide w-full max-w-[15.5rem] md:max-w-[9.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem] h-96 md:h-52 lg:h-64 xl:h-80 flex-shrink-0 snap-center mb-12 cursor-pointer`}/>
                            <div className={`animate-pulse bg-gray-200 slide w-full max-w-[15.5rem] md:max-w-[9.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem] h-96 md:h-52 lg:h-64 xl:h-80 flex-shrink-0 snap-center mb-12 cursor-pointer`}/>
                        </div>
                    </div>
                </section>

                <section className="relative flex flex-col justify-start w-full h-fit">
                    <div className="w-4/5 text-2xl md:text-xl font-normal capitalize flex flex-col">
                        <span>Arch Three | 2017 - 2018</span>
                        <hr className="w-full h-0.5 bg-black"/>
                    </div>
                    <div className="relative md:max-w-[100%]">
                        <div className="w-full py-10 h-fit flex snap-x snap-mandatory overflow-x-auto space-x-2 scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
                            <div className={`animate-pulse bg-gray-200 slide w-full max-w-[15.5rem] md:max-w-[9.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem] h-96 md:h-52 lg:h-64 xl:h-80 flex-shrink-0 snap-center mb-12 cursor-pointer`}/>
                            <div className={`animate-pulse bg-gray-200 slide w-full max-w-[15.5rem] md:max-w-[9.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem] h-96 md:h-52 lg:h-64 xl:h-80 flex-shrink-0 snap-center mb-12 cursor-pointer`}/>
                            <div className={`animate-pulse bg-gray-200 slide w-full max-w-[15.5rem] md:max-w-[9.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem] h-96 md:h-52 lg:h-64 xl:h-80 flex-shrink-0 snap-center mb-12 cursor-pointer`}/>
                            <div className={`animate-pulse bg-gray-200 slide w-full max-w-[15.5rem] md:max-w-[9.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem] h-96 md:h-52 lg:h-64 xl:h-80 flex-shrink-0 snap-center mb-12 cursor-pointer`}/>
                            <div className={`animate-pulse bg-gray-200 slide w-full max-w-[15.5rem] md:max-w-[9.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem] h-96 md:h-52 lg:h-64 xl:h-80 flex-shrink-0 snap-center mb-12 cursor-pointer`}/>
                            <div className={`animate-pulse bg-gray-200 slide w-full max-w-[15.5rem] md:max-w-[9.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem] h-96 md:h-52 lg:h-64 xl:h-80 flex-shrink-0 snap-center mb-12 cursor-pointer`}/>
                        </div>
                    </div>
                </section>
            </Container>
            <RippedBackground option="2"/>
            <Container>
                <section className="relative flex flex-col w-full h-fit my-6 lg:flex-row lg:flex-wrap">
                    <div className="
                        flex
                        flex-col
                        uppercase
                        font-bold
                        md:font-semibold
                        tracking-wide
                        text-3xl
                        md:text-2xl
                        text-center
                        md:text-left
                        items-center
                        md:items-start
                        pb-5
                        md:pb-10
                        lg:basis-full
                        
                    ">
                        <span>More To Read</span>
                        <hr className="w-1/4 h-0.5 bg-teal-500"/>
                    </div>
                    <div className="lg:w-[60%] relative px-4 lg:px-0 my-10 md:my-6 h-80">
                        <div className="bg-gray-200 animate-pulse rounded-lg w-full lg:w-11/12 h-full"/>
                    </div>
                    <div className="lg:w-[40%] relative my-10 md:my-6 flex flex-col">
                        <div className="bg-gray-200 animate-pulse rounded-lg w-full h-80"/>
                    </div>
                </section>
            </Container>
            <Banner/>
        </div>
    )
}