import { getDHComicById } from "../../actions/getComics";
import Await from "../../comics/[id]/await";
import Banner from "../../components/Banner";
import ComicsSkeleton from "../../utils/ComicsSkeleton";
import DHComicMain from "./DHComicMain";
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
        const comic = await getDHComicById(params);
        if (!comic)
            return {
                title: "Page Not Found | TR Archives",
                description: "The page you are looking for does not exist."
            };
        return {
            title: `${comic.name} - ${comic.author}, ${comic.pencil} | Dark Horse | TR Archives`,
            description: `${comic.name}, ${comic.author} & ${comic.pencil}, from the rebooted 'Survivor' series of comics by Dark Horse.`,
            alternates: {
                canonical: `/darkhorse/${comic.id}`
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

const DHComicPage = async ({ params }: {params: IParams}) => {
    const comic = getDHComicById(params)    
    
    return (
        <>
            <Suspense fallback={<ComicsSkeleton/>}>
                <Await promise={comic}>
                    {(comic) => <DHComicMain comicDetails={comic}/>}
                </Await>
            </Suspense>
            <Banner/>
        </>
    )
}

export default DHComicPage;