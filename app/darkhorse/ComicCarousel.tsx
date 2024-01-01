import { getDHComicsById } from "../actions/getComics";
import SliderContainer from "./SliderContainer";
import DHBlur from "./DHBlur";

interface CCProps {
    dhId: string
}

const ComicCarousel = async (props: CCProps) => {
    const dhcomics = await getDHComicsById(props.dhId)
    return(
        <>
           <SliderContainer>
                <DHBlur dhcomics={dhcomics}/>
           </SliderContainer>
        </>
    )
}

export default ComicCarousel