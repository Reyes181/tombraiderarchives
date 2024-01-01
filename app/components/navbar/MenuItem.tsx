"use client"
import { useRouter } from "next/navigation";

interface MenuItemProps {
    closeMenu: () => void;
    label: string;
    dataID: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
    closeMenu,
    label,
    dataID
}) => {
    const router =  useRouter();
    return(
        <div
            onClick={() => {(router.push(`/archives/${dataID}`)); closeMenu();}} 
            className="
                px-4
                py-3
                hover:text-[#00bbca]
                transition
                font-semibold
                cursor-pointer
            "
        >
            {label}
        </div>
    )
}

export default MenuItem;