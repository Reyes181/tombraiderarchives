import * as React from 'react';
import Image from "next/image";
import { getPlaiceholder } from 'plaiceholder';

interface BlurProps {
    name: string;
    mainImage: string;
    comic?: boolean;
    dhcomic?:boolean;
    random?: boolean;
    arch?: boolean
}

const getImage = async (src: string) => {
    const buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );
  
    const {
      metadata: { height, width },
      ...plaiceholder
    } = await getPlaiceholder(buffer);
  
    return {
      ...plaiceholder,
      img: { src, height, width },
    };
  };

  export default async function BlurImage(props: BlurProps){
    const {base64, img} = await getImage(props.mainImage);

    return (
        <Image
            {...img}
            alt={props.name}
            title={props.name}
            blurDataURL={base64}
            placeholder='blur'
            className={
                props.comic ? 'cursor-pointer shrink-0 drop-shadow-lg w-auto ease-in-out h-auto md:h-3/4 lg:h-5/6 duration-300 hover:-translate-y-2'
                :
                props.dhcomic ? `shrink-0 drop-shadow-lg w-auto ease-in-out h-auto md:h-3/4 ${props.random ? 'lg:h-3/4' : 'lg:h-5/6'} duration-300 hover:-translate-y-2`
                :
                props.arch ? "object-contain object-center h-auto w-auto"
                :
                ''
            }
        />
    )
  }