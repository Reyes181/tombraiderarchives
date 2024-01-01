import { getArchiveDeatil} from "../../actions/getArchives";


interface ComicDescProps {
    arch?: string;
}

const ComicDesc = async (props: ComicDescProps) => {
    const archData = await getArchiveDeatil(props.arch)

    return (
        <div className="pt-5 text-lg md:text-base text-justify font-normal flex flex-col w-full md:w-9/12 lg:w-6/12 justify-start items-start">
            <span className="pb-2">{archData?.desc1}</span>
            <span>{archData?.desc2}</span>
        </div>
    )
};

export default ComicDesc;