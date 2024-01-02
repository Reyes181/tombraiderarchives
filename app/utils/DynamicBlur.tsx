import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";


const DynamicBlur = async ({name, mainImage}) => {
    const src = mainImage
    
    const buffer = await fetch(mainImage).then( async (res) => {
        return Buffer.from(await res.arrayBuffer());
    })

    const { base64 } = await getPlaiceholder(buffer);
    return(     
            <Image
                placeholder='blur'
                blurDataURL={base64}
                src={mainImage}
                alt={name}
                width={500}
                height={500}
                className={
                    'cursor-pointer shrink-0 drop-shadow-lg w-auto ease-in-out h-auto md:h-3/4 lg:h-5/6 duration-300 hover:-translate-y-2'
                }
            />
                   
    )
}

export default DynamicBlur;