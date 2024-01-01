"use client"
import { useRouter } from "next/navigation";
import { Arches } from "@prisma/client";

interface VolumeCardProps {
    data: Arches;
}

const VolumeCard: React.FC<VolumeCardProps> = ({
    data
}) => {
    const router = useRouter();
    return(
                    <div
                        key={data.id}
                        onClick={() => router.push(`/archives/${data.id}`)} 
                        className="group flex flex-col relative text-neutral-500 cursor-pointer"
                    >
                        <img
                            src={data.cover}
                            alt={data.name}
                            className="self-center sm:self-auto w-4/5 sm:w-auto ease-in-out duration-300 group-hover:-translate-y-2"
                        />
                        
                        <div className="
                            ease-in-out duration-300 
                            uppercase 
                            text-lg
                            sm:text-sm 
                            font-semibold 
                            text-center 
                            absolute 
                            inset-x-0 
                            bottom-0 
                            mb-4 lg:mb-8 
                            tracking-widest 
                            group-hover:tracking-loose
                            flex
                
                            lg:px-8
                            justify-center
                            items-center
                            group-hover:before:flex-1 group-hover:after:flex-1 
                            group-hover:before:h-[3px] group-hover:after:h-[3px]
                            group-hover:before:m-[0 1em] group-hover:after:m-[0 1em]
                            before:bg-teal-500 after:bg-teal-500
                            group-hover:before:ease-in-out group-hover:after:ease-in-out
                            group-hover:before:duration-700 group-hover:after:duration-700
                        ">{data.volume}</div>
                    </div>
    )
}

export default VolumeCard;