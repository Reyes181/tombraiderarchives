"use client"

import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    read?: boolean;
    small?: boolean;
    icon?: IconType
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    read,
    small,
    icon: Icon
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                group
                flex
                justify-around
                uppercase
                font-comic
                tracking-widest
                relative
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-sm
                hover:opacity-80
                transition
                text-white
                sm:text-base
                lg:text-xl
                py-3
                border-2
                ${outline ? 'bg-[#00ACEE]' : 'bg-[#1f3133]'}
                ${outline ? 'border-white' : 'bg-[#1f3133]'}
                
                ${read ? 'font-semibold' : 'font-base'}
                ${small ? 'w-full' : 'w-full md:w-1/2'}
            `}
        >
            {Icon && (
                <Icon
                    size={24}
                    className="absolute left-4 top-3 basis-3/12"
                />
            )}
            <span className="basis-9/12 flex items-baseline justify-end ease-in-out duration-300 group-hover:-translate-x-2">{label}</span>
        </button>
    )
};

export default Button;