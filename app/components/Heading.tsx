"use client";
import Image from "next/image";

interface HeadingProps {
    title: string,
    subtitle: string,
    center: boolean
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle,
    center
}) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <div className="relative">
                <Image 
                    alt="Red Backdrop"
                    className="object-contain m-auto"
                    src="/images/redTitleBck.png"
                    width="200"
                    height="100"
                />
                <div className="
                        text-white 
                        font-comic 
                        text-2xl 
                        tracking-wider
                        absolute 
                        top-1/2 
                        left-1/2 
                        -translate-x-1/2 
                        -translate-y-1/2
                        pr-2.5
                ">
                    {title}
                </div>
            </div>
            
            <div className="font-light w-2/3 text-neutral-500 mt-6 m-auto">
                {subtitle}
            </div>
        </div>
    )
}

export default Heading;