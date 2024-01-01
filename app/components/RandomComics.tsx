import {getRandomComics} from '../actions/getComics'
import BlurImage from '../utils/BlurImage';
import ComicCard from './cards/ComicCard';
import DHCard from './cards/DHCard';


interface RandomComicsProps {
    arch?: string;
    comic?: string;
    darkhorse?: boolean
}

const RandomComics = async (props: RandomComicsProps) => {
    const randomComics = await getRandomComics({archID: props.arch, comicID: props.comic, dhComic: props.darkhorse})

    return (
        <div className={`px-4 md:px-1 xl:px-4 grid grid-cols-1 md:grid-cols-5 gap-2 ${props.darkhorse ? 'lg:gap-3': 'lg:gap-6'}`}>
            {randomComics?.map((comic, i) => (
                props.darkhorse ?
                <DHCard
                    dhcomic={comic}
                    random
                    key={i}
                >
                    <BlurImage name={comic.name} mainImage={comic.cover} dhcomic/>
                </DHCard>
                :
                <ComicCard
                    comic={comic}
                    key={i}
                >
                    <BlurImage name={comic.name} mainImage={comic.cover} comic/>
                </ComicCard>
            ))}
        </div>
    )
};

export default RandomComics;