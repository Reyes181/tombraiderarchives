import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';

export default async function DynamicBlur({src, alt}) {
    const buffer = await fetch(src).then(async (res) => {
        return Buffer.from(await res.arrayBuffer())
    })

    const {base64} = await getPlaiceholder(buffer);

    return (
        <Image
            width={500}
            height={500}
            src={src}
            alt={alt}
            placeholder='blur'
            blurDataURL={base64}
            className='cursor-pointer shrink-0 drop-shadow-lg w-auto ease-in-out h-auto md:h-3/4 lg:h-5/6 duration-300 hover:-translate-y-2'
        />
    )
}