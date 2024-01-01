import { getArchiveDeatil } from "../../actions/getArchives";

interface ComicBannerProps {
    arch?: string;
}

const ComicBanner = async (props: ComicBannerProps) => {
    const archData = await getArchiveDeatil(props.arch)

    return (
        <div 
            style={{backgroundColor: `#${archData?.bgcolor}`}} 
            className="w-full h-10 flex justify-center items-center relative"
        >
            <div className="text-base md:text-lg font-semibold text-white uppercase pt-1">
                {archData?.name}
            </div>
        </div>
    )
};

export default ComicBanner;