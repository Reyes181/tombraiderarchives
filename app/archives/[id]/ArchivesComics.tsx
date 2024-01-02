import { Suspense } from "react";
import CardsSkeleton from "../../utils/CardsSkeleton";
import ComicCard from "../../components/cards/ComicCard";
import BlurImage from "../../utils/BlurImage";
import { getComicsById} from "../../actions/getComics";
import Image from "next/image";


interface IParams {
    id?: string
}

const ArchivesComics = async ({ params }: {params: IParams}) => {
    const comics = await getComicsById(params);

    return(
    
            <div className="px-4 grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-10 xl:gap-6">
            {comics?.map((comic, i) => (
                    <ComicCard
                        comic={comic}
                        key={i}
                    >
                        {/* <BlurImage name={comic.name} mainImage={comic.cover} comic/> */}
                        <Image
                            src={comic.cover}
                            alt={comic.name}
                            width={500}
                            height={500}
                            className={
                                'cursor-pointer shrink-0 drop-shadow-lg max-w-[250px] w-auto ease-in-out h-auto md:h-3/4 lg:h-5/6 duration-300 hover:-translate-y-2'
                            }
                        />
                    </ComicCard>    
            ))}
            </div>
        
    )
}

export default ArchivesComics;