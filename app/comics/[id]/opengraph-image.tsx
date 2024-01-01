import { getComicById } from "../../actions/getComics";
import { ImageResponse } from "next/server";

export const size = {
    width: 1200,
    height: 630
}

export const contentType = "image/jpg";

interface IParams {
    id?: string
}

export default async function og({ params }: {params: IParams}) {
    const comic = await getComicById(params);

    return new ImageResponse(
        (
            <div tw="relative flex w-full h-full flex items-center justify-center">
                {/* Background */}
                <div tw="absolute flex inset-0">
                    <img
                        tw="flex flex-1 object-none object-center"
                        src={comic?.cover}
                        alt={comic?.name}
                    />
                    {/* Overlay */}
                    <div tw="absolute flex inset-0 bg-black bg-opacity-50 z-10"/>
                </div>
                <div tw="flex flex-col text-neutral-50">
                    {/* Title */}
                    <div tw="text-7xl font-bold">{comic?.name}</div>
                    {/* Tags */}
                    <div tw="flex mt-6 flex-wrap items-center text-4xl justify-start">
                        <span tw="pr-4">{comic?.author}</span>
                        <span>{comic?.artist}</span>
                    </div>
                </div>
            </div>
        ),
        size
    )
}