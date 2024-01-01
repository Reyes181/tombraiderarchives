import type { Metadata } from 'next';
import Container from "../components/Container";
import DHBanner from "./DHBanner";
import ComicCarousel from "./ComicCarousel";
import RippedBackground from "../utils/RippedBackground";
import Banner from "../components/Banner";
import MediaContainer from "./MediaContainer";
import { Suspense } from "react";
import DHSkeleton from "../utils/DHSkeleton";

export const metadata: Metadata = {
    title: 'Dark Horse | TR Archives',
    description: "Tomb Raider rebooted 'Survivor' series of comics published by Dark Horse.",
    alternates: {
        canonical: '/darkhorse'
    }
}

const DarkHorsePage = () => {
    const bookData = [
        {
            "name": "Tomb Raider: The Official Cookbook and Travel Guide",
            "authors": ["Tara Theoharis", "Sebastian Haley", "Meagan Marie"]
        },
        {
            "name": "Shadow Of The Tomb Raider: Path Of The Apocalypse",
            "authors": ["S.D. Perry"]
        },
        {
            "name": "Tomb Raider: The Amulet Of Power",
            "authors": ["Mike Resnick"]
        },
        {
            "name": "Tomb Raider: The Man Of Bronze",
            "authors": ["James Alan Gardner"]
        }
    ]

    return (
        <Suspense fallback={<DHSkeleton/>}>
            <div className="flex flex-col w-full h-full">
                <DHBanner/>
                <RippedBackground option="1"/>
                <Container>
                    <section className="w-full h-72 relative -mt-10 md:-mt-0 md:py-4 md:my-5 lg:py-0">
                        <div className="bg-[url('/images/DarkHorseBanner.png')] bg-contain bg-center bg-no-repeat h-full"/>
                    </section>

                    <section className="relative flex flex-col justify-start w-full h-fit">
                        <div className="w-4/5 text-2xl md:text-xl font-normal capitalize flex flex-col">
                            <span>Arch One | 2014 - 2016</span>
                            <hr className="w-full h-0.5 bg-black"/>
                        </div>
                        <ComicCarousel dhId={"650b50e61099a9e922f5aa9f"}/>
                    </section>

                    <section className="relative flex flex-col justify-start w-full h-fit">
                        <div className="w-4/5 text-2xl md:text-xl font-normal capitalize flex flex-col">
                            <span>Arch Two | 2016 - 2017</span>
                            <hr className="w-full h-0.5 bg-black"/>
                        </div>
                        <ComicCarousel dhId={"650b51321099a9e922f5aaa0"}/>
                    </section>

                    <section className="relative flex flex-col justify-start w-full h-fit">
                        <div className="w-4/5 text-2xl md:text-xl font-normal capitalize flex flex-col">
                            <span>Arch Three | 2017 - 2018</span>
                            <hr className="w-full h-0.5 bg-black"/>
                        </div>
                        <div className="my-10 mx-auto w-4/5 h-80 bg-gradient-to-b from-transparent via-neutral-100 rounded-lg flex items-center justify-center uppercase text-3xl font-bold tracking-wide text-gray-300">
                            <div  className="text-center">Comics coming soon</div>
                        </div>  
                    </section>
                </Container>

                <RippedBackground option="2"/>

                <MediaContainer bookData={bookData}/>
                <Banner/>
            </div>
        </Suspense>

    )
}

export default DarkHorsePage;