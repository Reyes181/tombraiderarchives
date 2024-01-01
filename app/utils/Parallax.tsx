"use client"
import styles from './parallax.module.scss';
import Image from 'next/image';
import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const Images = [
    "https://res.cloudinary.com/reyes181/image/upload/v1666371420/comics/Arch%201%20Issues/Arch%201%20Art/Arch_1_Alt_5.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1666371418/comics/Arch%201%20Issues/Arch%201%20Art/Arch_1_Alt_13.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1666371383/comics/Arch%201%20Issues/Arch%201%20Art/Arch_1_Alt_9.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1666371381/comics/Arch%201%20Issues/Arch%201%20Art/Arch_1_Alt_8.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1666371620/comics/Arch%202%20Issues/Arch%202%20Art/Arch_2_Alt_5.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1666371575/comics/Arch%202%20Issues/Arch%202%20Art/Arch_2_Alt_8.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1666371575/comics/Arch%202%20Issues/Arch%202%20Art/Arch_2_Alt_3.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1666371575/comics/Arch%202%20Issues/Arch%202%20Art/Arch_2_Alt_7.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1695152606/comics/Arch%203%20Issues/Arch%203%20Art/Arch_3_Alt_4.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1695152604/comics/Arch%203%20Issues/Arch%203%20Art/Arch_3_Alt_3.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1695152600/comics/Arch%203%20Issues/Arch%203%20Art/Arch_3_Alt_1.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1666371574/comics/Arch%202%20Issues/Arch%202%20Art/Arch_2_Alt_2.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1666371380/comics/Arch%201%20Issues/Arch%201%20Art/Arch_1_Alt_6.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1666371362/comics/Arch%201%20Issues/Arch%201%20Art/Arch_1_Alt_7.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1666371359/comics/Arch%201%20Issues/Arch%201%20Art/Arch_1_Alt_2.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1666371348/comics/Arch%201%20Issues/Arch%201%20Art/Arch_1_Alt_14.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1666371340/comics/Arch%201%20Issues/Arch%201%20Art/Arch_1_Alt_4.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1666371339/comics/Arch%201%20Issues/Arch%201%20Art/Arch_1_Alt_3.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1666371300/comics/Arch%201%20Issues/Arch%201%20Art/Arch_1_Alt_11.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1666371300/comics/Arch%201%20Issues/Arch%201%20Art/Arch_1_Alt_1.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1666371296/comics/Arch%201%20Issues/Arch%201%20Art/Arch_1_Alt_10.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1666371634/comics/Arch%202%20Issues/Arch%202%20Art/Arch_2_Alt_6.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1666371574/comics/Arch%202%20Issues/Arch%202%20Art/Arch_2_Alt_1.jpg",
    "https://res.cloudinary.com/reyes181/image/upload/v1666371574/comics/Arch%202%20Issues/Arch%202%20Art/Arch_2_Alt_4.jpg"
]

export default function Parallax({option}) {
    const container = useRef(null);
    const [dimension, setDimension] = useState({width:0, height:0});

    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });
    const {height} = dimension;
    const range = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const range2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    const range3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    const range4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

    useEffect( () => {
        const lenis = new Lenis()
    
        const raf = (time) => {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
    
        const resize = () => {
          setDimension({width: window.innerWidth, height: window.innerHeight})
        }
    
        window.addEventListener("resize", resize)
        requestAnimationFrame(raf);
        resize();
    
        return () => {
          window.removeEventListener("resize", resize);
        }
    }, [])

    return (
        <main className={styles.main}>
            <div className={styles.gallery}>
                {option == '1' ? <>
                <Column images={[Images[0], Images[1], Images[2]]} y={range}/>
                <Column images={[Images[3], Images[4], Images[5]]} y={range2}/>
                <Column images={[Images[6], Images[7], Images[8]]} y={range3}/>
                <Column images={[Images[9], Images[10], Images[11]]} y={range4}/>
                <Column images={[Images[12], Images[13], Images[14]]} y={range}/>
                <Column images={[Images[15], Images[16], Images[17]]} y={range2}/>
                <Column images={[Images[18], Images[19], Images[20]]} y={range3}/>
                <Column images={[Images[21], Images[22], Images[23]]} y={range4}/>
                </> 
                : 
                <>
                <Column images={[Images[2], Images[4], Images[0]]} y={range3}/>
                <Column images={[Images[6], Images[8], Images[10]]} y={range}/>
                <Column images={[Images[3], Images[1], Images[5]]} y={range3}/>
                <Column images={[Images[7], Images[9], Images[11]]} y={range}/>
                <Column images={[Images[23], Images[21], Images[19]]} y={range3}/>
                <Column images={[Images[17], Images[15], Images[13]]} y={range}/>
                <Column images={[Images[14], Images[16], Images[12]]} y={range3}/>
                <Column images={[Images[20], Images[18], Images[22]]} y={range}/>
                </>
                }
                
            </div>
            
        </main>
    )
};

const Column = ({images, y}) => {
    return (
        <motion.div style={{y}} className={styles.column}>
            {
                images.map((srcImg, i) => {
                    return <div key={i} className={styles.imageContainer}>
                        <Image
                            src={srcImg}
                            fill
                            alt="image"
                        />
                    </div>
                })
            }
        </motion.div>
    )
}