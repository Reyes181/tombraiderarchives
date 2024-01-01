"use client";
import MenuItem from './MenuItem';
import { useRouter } from "next/navigation";
import {BiDownload} from 'react-icons/bi';
import {AiOutlineMenu} from 'react-icons/ai';
import { useCallback, useState } from 'react';

const Menu = () => {
    const router =  useRouter();
    const [isOpen, setIsOpen] = useState(true);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
        
    }, [])

    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        deferredPrompt = e;
    });

    const installApp = async () => {
        if (deferredPrompt !== null) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                deferredPrompt = null;
            }
        }
    };
    return(
        <div className="relative">
            <div className="flex flex-row items-center gap-12">
                <div
                    onClick={toggleOpen}
                    className={
                        `hidden
                        md:block
                        text-sm
                        font-semibold
                        py-4
                        hover:text-[#00bbca]
                        transition
                        cursor-pointer
                        ${!isOpen && 'text-[#00bbca]'}`
                    }
                >
                    Top Cow
                </div>
                <div
                    onClick={() => router.push('/darkhorse')} 
                    className="
                        hidden
                        md:block
                        text-sm
                        font-semibold
                        py-4
                        hover:text-[#00bbca]
                        transition
                        cursor-pointer
                    "
                >
                    Dark Horse
                </div>
                <div
                    onClick={() => router.push('/media')} 
                    className="
                        hidden
                        md:block
                        text-sm
                        font-semibold
                        py-4
                        hover:text-[#00bbca]
                        transition
                        cursor-pointer
                    "
                >
                    Media
                </div>
                <div
                    onClick={installApp}
                    ref={installApp}
                    className="
                        md:border-[1px]
                        w-full
                        md:w-auto
                        py-2
                        rounded-full
                        md:shadow-sm
                        hover:shadow-md
                        transition
                        cursor-pointer
                        hover:bg-[#1f3133]
                        hover:text-white
                    "
                >
                    <div
                        className="
                            flex
                            flex-row
                            items-center
                            justify-btween
                        "
                    >
                        <div
                            className="
                                pl-2
                                text-sm
                                md:pl-6
                                pr-2
                                flex
                                flex-row
                                items-center
                                gap-3
                            "
                        >
                            <div
                                className="hidden md:block hover:text-white"
                            >
                                Download WebApp
                            </div>
                            <div
                                className="
                                    hidden
                                    md:block
                                    p-2
                                    bg-[#1f3133]
                                    rounded-full
                                    text-white
                                "
                            >
                                <BiDownload size={18}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div
                    className="
                        md:hidden
                        p-2
                        text-green
                        tex-[#000000]
                    "
                >
                    <AiOutlineMenu size={32}/>
                </div>
                {!isOpen && (
                        <div
                            className="
                                hidden
                                md:block
                                dropdown-menu
                                absolute
                                shadow-md
                                w-[40vw]
                                md:w-2/5
                                bg-white
                                overflow-hidden
                                top-12
                                text-sm
                                z-10
                            "
                        >
                            <div className="flex flex-col cuursor-pointer">
                                <>
                                    <MenuItem
                                        closeMenu={toggleOpen}
                                        label="Archive Volume 1"
                                        dataID="63602c3db0cae374da076117"
                                    />
                                    <MenuItem
                                        closeMenu={toggleOpen}
                                        label="Archive Volume 2"
                                        dataID='63602c6fb0cae374da07611a'
                                    />
                                    <MenuItem
                                        closeMenu={toggleOpen}
                                        label="Archive Volume 3"
                                        dataID='63602c86b0cae374da07611d'
                                    />
                                    <MenuItem
                                        closeMenu={toggleOpen}
                                        label="Archive Volume 4"
                                        dataID='63602ca0b0cae374da076120'
                                    />
                                </>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Menu;