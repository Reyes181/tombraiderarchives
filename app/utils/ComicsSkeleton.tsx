import RippedBackground from "./RippedBackground";
import Container from "../components/Container";

export default function ComicsSkeleton(){
    return(
        <>
            <div 
                className="bg-gray-200 animate-pulse w-full h-10 flex justify-center items-center relative"
            />
            <RippedBackground option="1"/>
            <Container>
                <div className="w-full h-fit flex flex-col py-5">
                    <div className="flex justify-end w-full">
                        <div className="bg-gray-200 animate-pulse w-full md:w-1/5 h-10"/>
                    </div>

                    <div className="pt-4 lg:pt-0 w-full h-fit flex flex-col md:flex-row">
                        <div className="md:basis-4/12 lg:basis-3/12">
                            <div className="bg-gray-200 animate-pulse h-102 md:h-80 xl:h-102 w-full"/>
                        </div>
                        <div className="mt-10 md:mt-0 relative md:basis-8/12 lg:basis-9/12 md:pl-5 flex flex-col h-96 xl:h-100 justify-between">
                            <div className="w-full bg-gray-200 h-full animate-pulse"/>
                        </div>
                    </div>

                    <div className="w-full h-96 md:h-60 xl:h-96 animate-pulse bg-gray-200 my-20 xl:my-10 flex lg:justify-end"/>
                </div>
            </Container>
        </>
    )
}