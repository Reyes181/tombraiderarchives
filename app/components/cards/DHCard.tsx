"use client"
import { useRouter } from "next/navigation";
import { DHComics } from "@prisma/client";

interface ComicCardProps {
    dhcomic: DHComics;
    children: React.ReactNode;
    random?: boolean;
}

const DHCard: React.FC<ComicCardProps> = ({
    dhcomic,
    children,
    random
}) => {
    const router = useRouter();
    return(
        <div
        onClick={() => router.push(`/darkhorse/${dhcomic.id}`)} 
        key={dhcomic.id}
        className={`slide ${random ? 'w-full md:max-w-[9.5rem] lg:max-w-[12.5rem] xl:max-w-[15.5rem]' : 'w-full max-w-[15.5rem] md:max-w-[9.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem]'}h-full flex-shrink-0 snap-center mb-12 flex flex-col relative text-black cursor-pointer`}
    >
        {/* <img
            src={dhcomic.cover}
            alt={dhcomic.name}
            className={`shrink-0 drop-shadow-lg w-auto ease-in-out h-auto md:h-3/4 ${random ? 'lg:h-3/4' : 'lg:h-5/6'} duration-300 hover:-translate-y-2`}
        /> */}
        {children}
        
        <div className="
            mt-5
            w-full
            capitalize
            text-left
            flex
            flex-col
            shrink
        ">
            <div className="text-xl md:text-xs font-semibold w-fit">{dhcomic.name}</div>
            <div className="text-lg md:text-xs font-medium text-slate-600 flex flex-col">
                <span>{dhcomic.author}</span>
                <span>{dhcomic.pencil}</span>
            </div>
        </div>
    </div>
    )
}

export default DHCard;