"use client"
import NextJsImage from "./NextJsImage";
import { useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";


const ReadGeneralButton = (props) => {
    const [open, setOpen] = useState(false);
    const slidesLink = props.pages;

    function setSrc(item, index) {
        var fullLink = {src: item};
        return fullLink;
    }   

    return (
        <>
            <div
                className=" md:border-[1px]
                text-center
                font-bold
                text-lg
                uppercase
                w-full
                md:w-4/12
                py-2
                md:py-1
                lg:py-2
                rounded-full
                md:shadow-sm
                hover:shadow-md
                transition
                cursor-pointer
                bg-white
                text-black
                xl:text-white
                xl:bg-transparent
                xl:hover:bg-white
                xl:hover:text-black
                "
                onClick={() => setOpen(true)}
            >
                read
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slidesLink.map(setSrc)}
                render={{ slide: NextJsImage }}
                plugins={[Zoom]}
            />
        </>
    )
};

export default ReadGeneralButton;