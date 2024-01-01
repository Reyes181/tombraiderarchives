"use client"
import { useRouter } from "next/navigation";
import { Comics } from "@prisma/client";


interface ComicCardProps {
    comic: Comics;
    children: React.ReactNode;
}

const ComicCard: React.FC<ComicCardProps> = ({
    comic,
    children
}) => {
    const router = useRouter();
    return(
        <div
        onClick={() => router.push(`/comics/${comic.id}`)} 
        key={comic.id}
        className="mb-12 flex flex-col relative text-black cursor-pointer"
    >
        {/* <img
            src={comic.cover}
            alt={comic.name}
            className="shrink-0 drop-shadow-lg w-auto ease-in-out h-auto md:h-3/4 lg:h-5/6 duration-300 hover:-translate-y-2"
        /> */}

        {/* <BlurImage
            name={comic.name}
            mainImage={comic.cover}
            comic
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
            <div className="text-xl md:text-xs font-semibold w-fit">{comic.name}</div>
            <div className="text-lg md:text-xs font-medium text-slate-600 flex flex-col">
                <span>{comic.author}</span>
                <span>{comic.artist}</span>
            </div>
        </div>
    </div>
    )
}

export default ComicCard;