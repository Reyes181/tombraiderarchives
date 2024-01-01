"use client"
import { useRouter } from "next/navigation";

interface LinkBackProps {
    arch?: string;
    route: string
}

const LinkBack = (props: LinkBackProps) => {
    const router = useRouter();

    return (
        <div className="flex justify-end w-full">
            <div 
                className="uppercase text-black font-semibold underline cursor-pointer text-xl md:text-base"
                onClick={() => router.push(props.arch ? `/${props.route}/${props.arch}` : `/${props.route}`)} 
            >
                Return Back
            </div>
        </div>
    )
};

export default LinkBack;