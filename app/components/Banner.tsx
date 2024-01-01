import Image from "next/image";
import RippedBackground from "../utils/RippedBackground";
import {HiOutlineDevicePhoneMobile, HiComputerDesktop, HiOutlineDeviceTablet} from 'react-icons/hi2'


const Banner = () => {
    return (
        <>
            <RippedBackground option="3"/>
            <div className="w-full h-fit md:h-80 xl:h-fit flex-col md:flex-row flex bg-[url('/images/bckGreen.png')] bg-cover">
                <div className="h-full md:basis-7/12 xl:basis-6/12 pt-12 pb-10 md:px-10 md:pt-8 xl:pt-12 xl:pb-10 flex flex-col items-center md:items-end text-white">
                    <div className="xs:text-3xl md:text-xl xl:text-3xl flex flex-col uppercase tracking-wide items-center w-full xl:w-9/12">
                        <span className="font-semibold md:font-bold">Read on Different</span>
                        <span style={{clipPath: 'polygon(10% 0, 100% 0%, 90% 100%, 0% 100%)'}} className="bg-black p-2 xl:p-3 font-semibold w-1/2 text-center">Devices</span>
                    </div>
                    <div className="flex flex-col items-center w-full xl:w-9/12 py-10 md:py-4 xl:py-10 uppercase text-justify md:text-center leading-relaxed">
                        <span className="mb-10 text-base font-semibold w-10/12 md:mb-4 md:text-xs xl:mb-10 xl:text-base">All media available on the site are free to read on both desktop and mobile devices*</span>
                        <span className="text-sm md:text-xs font-light text-slate-50 leading-loose md:leading-normal w-10/12 xl:w-full">*Download the web-app to launch the site and provide easier and quicker access to the site</span>
                        <div className="flex justify-around pt-2 xl:pt-4 w-3/12 items-center">
                            <HiOutlineDevicePhoneMobile
                                size={50}
                            />
                            <HiOutlineDeviceTablet
                                size={60}
                            />
                            <HiComputerDesktop
                                size={70}
                            />
                        </div>
                    </div>
                    <hr className="h-0.5 w-9/12 md:w-full xl:w-9/12 bg-white"/>
                </div>
                <div className="md:basis-5/12 xl:basis-6/12 flex justify-end items-end">
                    <Image
                        className="w-auto h-full md:h-[90%] lg:h-full"
                        src="/images/Device_Banner_Img.png"
                        alt="Banner Image"
                        width={500}
                        height={482}
                    />
                </div>
            </div>
        </>
    )
}

export default Banner;