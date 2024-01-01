"use client"
import { useEffect} from "react";
import {motion, useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import {FaArrowRight} from "react-icons/fa";
import Button from "../Button";

const HomeDH = () => {
    const router = useRouter();
    const [ref, inView] = useInView();
    const mainControls = useAnimation();
    
    const xs = window.innerWidth <= 639;
    const sm = window.innerWidth >= 640;
    const md = window.innerWidth >= 768;
    const lg = window.innerWidth <= 1024;
    const xl = window.innerWidth >= 1280;
    const xxl = window.innerWidth >= 1536;
    

    useEffect(() => {
        if(inView){
            mainControls.start("visible");
        }
    },[mainControls, inView])

    return(
        <div className=" 
            relative
            w-full
            h-fit
            flex flex-col
            xl:px-20
            md:px-10
            sm:px-2
            px-4 py-8
        "
        >
            <div className="
                w-full
                flex
                flex-col
                uppercase
                font-bold
                md:font-extrabold
                tracking-wide
                text-4xl
                md:text-3xl
                lg:text-4xl
                text-center
                md:text-left
                items-center
                md:items-start
                pb-5
                md:pb-10
                text-zinc-300
            ">
                <div>Media <br/><span className="text-5xl md:text-4xl lg:text-5xl text-black tracking-tight">Dark Horse</span></div>
                <hr className="w-1/4 h-0.5 bg-teal-500"/>
            </div>

            <div className="h-fit lg:h-100 px-4 grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="flex items-center justify-center relative col-span-3 bg-[url('/images/DHImage.png')] bg-contain bg-center bg-no-repeat h-100 md:h-72 lg:h-100">
                    <motion.img
                        variants={{
                            // hidden: {opacity: xs ? 0 : md ? "40%" : "20rem", x:75},
                            // visible: {opacity: xs ? 1 : md ? "5%" : "9rem", x:0}
                            hidden: {opacity: 0, x:75},
                            visible: {opacity: 1, x:-20}
                        }}
                        ref={ref}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration: 1, delay:0.25}}
                        src="/images/DHSampleA.jpg"
                        alt="dh comic"
                        className="h-3/5 md:h-4/6 w-auto -z-10 "
                    />
                    <motion.img
                        variants={{
                            // hidden: {opacity: xs ? 0 : md ? "40%" : "20rem", x:-75},
                            // visible: {opacity: xs ? 1 : md ? "62%" : "30rem", x: 0}
                            hidden: {opacity: 0, x:-75},
                            visible: {opacity: 1, x:20}
                        }}
                        ref={ref}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration: 1, delay:0.25}}
                        src="/images/DHSampleB.jpg"
                        alt="dh comic"
                        className="h-3/5 md:h-4/6 w-auto -z-10 "
                    />
                </div>
                <div className="col-span-2 flex flex-col h-full py-4 md:py-0">
                    <div className="uppercase font-semibold tracking-wide text-2xl md:text-xl text-center">
                        <span>Collection of Media</span>
                        <hr className="w-full h-0.5 bg-teal-500"/>
                    </div>
                    <div className="py-10 md:py-4">
                        <p className="
                            text-neutral-500
                            text-justify
                            font-light
                            text-2xl md:text-lg
                            m-auto
                            pb-5 md:pb-1 lg:pb-3
                        ">
                            The Top Cow comics are not the only set of literature Lara Croft appeared in. From the rebooted Dark Horse comics in 2013 to the recent 25th anniversary cook book, there is plenty more to read of Tomb Raider and Lara’s adventures.
                        </p>
                        <p className="
                            text-neutral-500
                            text-justify
                            font-light
                            text-2xl md:text-lg
                            m-auto
                            pb-5 md:pb-1
                        ">
                            Expect this collection of media to be updated with more selections of books and comic issues.
                        </p>
                    </div>
                    <Button small icon={FaArrowRight} label="View Selection" onClick={() => router.push(`/darkhorse`)}/>
                </div>
            </div>
        </div>
    )
}

export default HomeDH;