import { getArchiveById, getGalleryById } from "../../actions/getArchives";
import { getComicsById, getArtsById } from "../../actions/getComics";
import Container from "../../components/Container";
import RippedBackground from "../../utils/RippedBackground";
import ComicCard from "../../components/cards/ComicCard";
import Banner from "../../components/Banner";
import BlurImage from "../../utils/BlurImage";
import { Suspense } from "react";
import ArchSkeleton from "../../utils/ArchSkeleton";
import CardsSkeleton from "../../utils/CardsSkeleton";
import SliderContainer from "../../darkhorse/SliderContainer";
import ArtCard from "../../components/cards/ArtCard";
import ReadGeneralButton from "../../components/ReadGeneralButton";

interface IParams {
    id?: string
}

export async function generateMetadata({
    params,
}: {
    params: {
        id?: string
    };
}) {
    try {
        const archive = await getArchiveById(params);
        if (!archive)
            return {
                title: "Page Not Found | TR Archives",
                description: "The page you are looking for does not exist."
            };
        return {
            title: `${archive.name} | Top Cow Comics | TR Archives`,
            description: archive.desc3,
            alternates: {
                canonical: `/archives/${archive.id}`
            },
            robots: {
                index: false,
                follow: true,
                nocache: true
            }
        }

    } catch (error) {
        console.log(error);
        return {
            title: "Page Not Found | TR Archives",
            description: "The page you are looking for does not exist."
        }
    }
}

const ArchivePage = async ({ params }: {params: IParams}) => {
    const archive = await getArchiveById(params);
    const comics = await getComicsById(params);
    const arts = await getArtsById(params);
    const gallery = await getGalleryById(params);

    return (
        <div className="flex flex-col w-full h-full">
            <Suspense fallback={<ArchSkeleton/>}>
                <section className="relative max-w-[2520px] h-fit">
                    <Container>
                        <div style={{backgroundImage: `url(${archive?.banner})`}} className={`bg-cover bg-no-repeat h-80 xl:h-96`}>
                            <div className="h-full w-full flex flex-col md:flex-row  bg-gradient-to-b from-transparent via-transparent to-black justify-around">
                                <div className="basis-7/12 xl:basis-9/12 flex items-end justify-start h-full py-2 px-4">
                                    <div className="text-white uppercase flex flex-col">
                                        <div className="text-xl font-extrabold tracking-widest py-2">Top Cow Comics</div>
                                        <div className="text-3xl xl:text-5xl font-medium text-slate-300">{archive?.name}</div>
                                    </div>
                                </div>
                                <div className="basis-5/12 xl:basis-3/12 overflow-hidden md:flex justify-end h-full hidden">
                                    <BlurImage name={archive ? archive?.name : ''} mainImage={archive ? archive?.icon : ''} arch/>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="relative max-w-[2520px] h-fit my-5 py-4">
                    <Container>
                        <div className="flex flex-col xl:flex-row justify-between">
                            <div className="basis-6/12 flex flex-col content-around mb-10 xl:mb-0">
                                <div className="pb-5 text-2xl uppercase font-semibold text-black">{archive?.desc1}</div>
                                <div className="text-xl xl:text-base font-medium text-black xl:tracking-wider text-justify">{archive?.desc2}</div>
                            </div>
                            <div className="basis-5/12 text-xl md:text-base font-semibold text-justify tracking-wider bg-slate-300 p-10 flex items-center">
                                {archive?.desc3}
                            </div>
                        </div>
                    </Container>
                </section>
            </Suspense>
            
            <RippedBackground option="2"/>

            <section className="relative max-w-[2520px] h-fit my-5 py-4">
                <Container>
                    <div className="flex flex-col">
                        <div className="
                            flex
                            flex-col
                            uppercase
                            font-semibold
                            tracking-wide
                            text-2xl
                            items-center
                            md:items-start
                            pb-10
                        ">
                            <span>Available To Read</span>
                            <hr className="w-1/4 h-0.5 bg-teal-500"/>
                        </div>
                        
                            <div className="px-4 grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-10 xl:gap-6">
                            {comics?.map((comic, i) => (
                                    <ComicCard
                                        comic={comic}
                                        key={i}
                                    >
                                        <BlurImage name={comic?.name} mainImage={comic?.cover} comic/>
                                    </ComicCard>
                            ))}
                            </div>
                        
                    </div>
                </Container>
            </section>
            <section>
                <Container>
                    <div className="flex flex-col">
                        <div className="
                            flex
                            flex-col
                            uppercase
                            font-semibold
                            tracking-wide
                            text-2xl
                            items-center
                            md:items-start
                            pb-10
                        ">
                            <span>Volume Art Gallery</span>
                            <hr className="w-1/4 h-0.5 bg-teal-500"/>
                        </div>
                    </div>
                    <Suspense fallback={<CardsSkeleton/>}>
                        <SliderContainer>
                            <>
                            {arts?.map((art, i) => (
                                <ArtCard art={art} key={i}>
                                    <BlurImage name={art?.artist} mainImage={art?.illustration} comic/>
                                </ArtCard>
                            ))}
                            </> 
                        </SliderContainer>
                    </Suspense>
                </Container>
            </section>
            <section className="w-full pt-16 pb-28">
                <Suspense fallback={<div className="h-100 md:h-64 lg:h-80 w-full animate-pulse bg-gray-200"/>}>
                    {
                        gallery?.map((g, i) =>(
                            <div key={i} style={{backgroundImage: `url(${g?.cover})`}} className={`bg-center bg-cover bg-no-repeat h-100 md:h-64 lg:h-80 w-full`}>
                                <div className="h-full w-full lg:w-7/12 bg-gradient-to-b from-transparent via-black to-black md:bg-gradient-to-r md:from-black md:via-black md:to-transparent">
                                    <div className="w-full h-full flex flex-col text-white p-10 justify-between items-start">
                                        <div className="uppercase text-slate-300">More To Read</div>
                                        <div className="flex flex-col w-full md:w-7/12">
                                            <div className="uppercase font-bold pb-4 text-lg md:text-base lg:text-lg">{g?.title}</div>
                                            <div className="leading-loose text-base md:text-sm lg:text-base">{g?.desc}</div>
                                        </div>
                                        <ReadGeneralButton pages={g?.miniComic}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }  
                </Suspense>
            </section>
            <Banner/>
        </div>
    )
}

export default ArchivePage;