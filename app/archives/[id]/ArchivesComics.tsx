import { Suspense } from "react";
import CardsSkeleton from "../../utils/CardsSkeleton";
import ComicCard from "../../components/cards/ComicCard";
import BlurImage from "../../utils/BlurImage";

const ArchivesComics = (props) => {
    const comics = props.comics
    return(
<       Suspense fallback={<CardsSkeleton/>}>
            <div className="px-4 grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-10 xl:gap-6">
            {comics.map((comic, i) => (
                    <ComicCard
                        comic={comic}
                        key={i}
                    >
                        {/* <BlurImage name={comic.name} mainImage={comic.cover} comic/> */}
                        <div key={i}>
                            {comic.name}
                        </div>
                    </ComicCard>
                    
            ))}
            </div>
        </Suspense>
    )
}

export default ArchivesComics;