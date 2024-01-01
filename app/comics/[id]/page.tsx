import { getComicById } from "../../actions/getComics";
import Banner from "../../components/Banner";
import CardsSkeleton from "../../utils/CardsSkeleton";
import ComicMain from "./ComicMain";
import Await from "./await";
import { Suspense } from "react";


interface IParams {
    id?: string
}

export async function generateMetadata({
    params,
}: {
    params: {
        id?: string
    };
}) {
    try {
        const comic = await getComicById(params);
        if (!comic)
            return {
                title: "Page Not Found | TR Archives",
                description: "The page you are looking for does not exist."
            };
        return {
            title: `${comic.name} - ${comic.author}, ${comic.artist} | Top Cow Comics | TR Archives`,
            description: `${comic.name}, ${comic.author} & ${comic.artist}, from the archive comics by Top Cow Comics.`,
            alternates: {
                canonical: `/comics/${comic.id}`
            },
            robots: {
                index: false,
                follow: true,
                nocache: true
            }
        }

    } catch (error) {
        console.log(error);
        return {
            title: "Page Not Found | TR Archives",
            description: "The page you are looking for does not exist."
        }
    }
}


const ComicPage = async ({ params }: {params: IParams}) => {
    const comic = getComicById(params);
    
    
    return (
        <>
            <Suspense fallback={<CardsSkeleton/>}>
                <Await promise={comic}>
                    {(comic) => <ComicMain comicDetails={comic}/>}
                </Await>
            </Suspense>
            <Banner/>
        </>
    )
}

export default ComicPage;