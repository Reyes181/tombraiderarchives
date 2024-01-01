import BlurImage from "../utils/BlurImage";
import DHCard from "../components/cards/DHCard";


const DHBlur = (props) => {
    const {dhcomics}  = props
    return(
        <>
            {dhcomics.map((comic, i) => (
                    <DHCard
                    key={i}
                    dhcomic={comic}
                >
                    <BlurImage name={comic.name} mainImage={comic.cover} dhcomic/>
                </DHCard>
            ))}
            
        </>

    )
};

export default DHBlur