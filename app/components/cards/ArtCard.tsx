"use client"
import { Arts } from "@prisma/client";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { useState} from "react";
import NextJsImage from "../NextJsImage";


interface ComicCardProps {
    art: Arts;
    children: React.ReactNode;
}

const ArtCard: React.FC<ComicCardProps> = ({
    art,
    children
}) => {
    const [open, setOpen] = useState(false);
    const slidesLink = [art.illustration];

    function setSrc(item, index) {
        var fullLink = {src: item};
        return fullLink;
    } 
    return(
        <div
        onClick={() => setOpen(true)}
        key={art.id}
        className={`slide w-full max-w-[15.5rem] md:max-w-[9.5rem] lg:max-w-[10.5rem] xl:max-w-[12.5rem] h-9/12 flex-shrink-0 snap-center mb-12 flex flex-col relative text-black cursor-pointer`}
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
            <div className="text-lg md:text-xs font-medium text-slate-600 flex flex-col">
                <span className="text-xs">Penciler</span>
                <span className="font-semibold">{art.artist}</span>
            </div>
        </div>
        <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slidesLink.map(setSrc)}
            render={{ 
                slide: NextJsImage,
                buttonNext(){
                    return null
                },
                buttonPrev() {
                    return null
                }
            }}
            plugins={[Zoom]}
        />
    </div>
    )
}

export default ArtCard;