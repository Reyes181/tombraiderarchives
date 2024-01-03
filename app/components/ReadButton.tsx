"use client"
import Button from "./Button";
import NextJsImage from "./NextJsImage";
import {IoBookOutline, IoShareSocialOutline} from "react-icons/io5";
import { useState} from "react";
import { usePathname } from "next/navigation";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { toast } from "react-hot-toast";


const ReadButton = (props) => {
    const [open, setOpen] = useState(false);
    const slidesLink = props.pages;

    function setSrc(item, index) {
        var fullLink = {src: item};
        return fullLink;
    }   

    const share = usePathname();
    const base = "https://www.trarchives.com";

    const links = base + share;
    const copylink = (e) => {
        navigator.clipboard.writeText(links);
        toast.success('Link has been copied.')
    }

    return (
        <div className="flex flex-col md:flex-row justify-between w-full md:w-10/12 lg:w-1/2 xl:pt-12 pt-0">
            <Button onClick={() => setOpen(true)} label="Read" icon={IoBookOutline} read/>
            <Button onClick={copylink} label="Share" icon={IoShareSocialOutline} outline/>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slidesLink.map(setSrc)}
                render={{ slide: NextJsImage }}
                plugins={[Zoom]}
            />
        </div>
    )
};

export default ReadButton;