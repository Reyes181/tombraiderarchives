
import Container from "../../components/Container";
import RandomComics from "../../components/RandomComics";
import ReadButton from "../../components/ReadButton";
import RippedBackground from "../../utils/RippedBackground";
import ComicBanner from "./ComicBanner";
import ComicDesc from "./ComicDesc";
import LinkBack from "./LinkBack";
import BlurImage from "../../utils/BlurImage";
import Image from "next/image";
import { Suspense } from "react";
import CardsSkeleton from "../../utils/CardsSkeleton";



const ComicMain = (props) => {
    const comic = props.comicDetails
   
    return (
        <div className="w-full h-full flex flex-col">
            <ComicBanner arch={comic?.arch}/>
            <RippedBackground option="1"/>
            <Container>
                <div className="w-full h-fit flex flex-col py-5">
                    <LinkBack arch={comic?.arch} route={'archives'}/>
                    <div className="pt-4 lg:pt-0 w-full h-fit flex flex-col md:flex-row">
                        <div className="md:basis-4/12 lg:basis-3/12 drop-shadowlg">
                            {comic?.cover !== undefined && (
                                // <Image
                                //     src={comic?.cover}
                                //     alt={comic?.name}
                                //     width={500}
                                //     height={500}
                                // />
                                <BlurImage name={comic?.name} mainImage={comic?.cover}/>
                            )   
                            }
                            
                        </div>
                        <div className="relative md:basis-8/12 lg:basis-9/12 md:pl-5 flex flex-col md:h-100 justify-between">
                            <div className="uppercase text-base md:text-xs font-light text-black flex flex-col">
                                <p className="py-2">Top Cow Comics Archives</p>
                                <p>Page Count: <span className="pl-1 font-semibold text-2xl md:text-lg">{comic?.pagesTotal}</span></p>
                            </div>

                            <div className="py-4 flex flex-col w-full">
                                <div className="text-3xl md:text-xl lg:text-3xl font-semibold md:font-normal uppercase">{comic?.name}</div>
                                <ComicDesc arch={comic?.arch}/>
                            </div> 

                            <ReadButton pages={comic?.pages}/> 
                        </div>
                    </div>
                    <div className="w-full h-fit bg-gray-200 my-20 xl:my-10 flex lg:justify-end">
                        <div className="lg:basis-9/12 h-full py-4 pl-5 flex flex-col">
                            <div className="text-lg font-semibold text-black uppercase pt-2">Talents</div>
                            <hr className="w-10/12 bg-slate-900 h-0.5"/>
                            <div className="w-full flex flex-wrap text-base">
                                {comic?.talents.map((tobj) => {
                                    return Object.keys(tobj).map((keyName, i)=> (
                                        <div key={i} className="basis-6/12 lg:basis-3/12 py-6 flex flex-col">
                                            <span className="uppercase">{keyName}</span>
                                            {tobj[keyName].map((value, i) => (
                                            <span className="font-semibold" key={i}>
                                                {value}
                                            </span>
                                            ))}
                                            
                                        </div>
                                    ))
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 flex flex-col w-full relative">
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
                            <span>More From This Volume</span>
                            <hr className="w-1/4 h-0.5 bg-teal-500"/>
                        </div>
                    <Suspense fallback={<CardsSkeleton/>}>
                        <RandomComics arch={comic?.arch} comic={comic?.id}/>
                    </Suspense> 
                </div>
            </Container>
        </div>
    )
}

export default ComicMain;