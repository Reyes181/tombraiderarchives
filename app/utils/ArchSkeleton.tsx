import Container from "../components/Container";

const ArchSkeleton = () => {
    return(
        <>
            <section className="relative max-w-[2520px] h-fit">
                <Container>
                    <div className="bg-gray-200 animate-pulse w-full h-80 xl:h-96"/>
                </Container>
            </section>

            <section className="relative max-w-[2520px] h-fit my-5 py-4">
                <Container>
                    <div className="flex flex-col xl:flex-row justify-between">
                        <div className="basis-6/12 flex flex-col content-around mb-10 xl:mb-0">
                            <div className="pb-5 bg-gray-200 animate-pulse w-full p-20 md:p-10"/>
                            <div className="bg-gray-200 animate-pulse w-full p-20 md:p-10"/>
                        </div>
                        <div className="basis-5/12 animate-pulse bg-slate-300 p-40 md:p-10 w-full"/>  
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ArchSkeleton;