import { Suspense } from "react";
import CardsSkeleton from "../../utils/CardsSkeleton";
import ComicCard from "../../components/cards/ComicCard";
import BlurImage from "../../utils/BlurImage";
import { getComicsById} from "../../actions/getComics";

interface IParams {
    id?: string
}

const ArchivesComics = async ({ params }: {params: IParams}) => {
    const comics = await getComicsById(params);
    return(
<       Suspense fallback={<CardsSkeleton/>}>
            <div className="px-4 grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-10 xl:gap-6">
            {comics?.map((comic, i) => (
                    <ComicCard
                        comic={comic}
                        key={i}
                    >
                        <BlurImage name={comic.name} mainImage={comic.cover} comic/>
                    </ComicCard>
                    
            ))}
            </div>
        </Suspense>
    )
}

export default ArchivesComics;