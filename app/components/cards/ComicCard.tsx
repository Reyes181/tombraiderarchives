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
        className="mb-12 mx-auto md:mx-0 flex flex-col relative text-black cursor-pointer"
    >
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