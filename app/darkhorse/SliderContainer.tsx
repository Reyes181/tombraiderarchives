"use client"
import { useRef, useState} from "react";


interface CCProps {
    children: React.ReactNode;
}

const SliderContainer = (props: CCProps) => {
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(true)
    const slidesContainer = useRef<HTMLInputElement | null>(null);

    const moveRight = () => {
        if(slidesContainer.current){
            // console.log(slidesContainer.current.scrollWidth)
            // setShowLeft(true);
            // slidesContainer.current.scrollLeft >= 2290 && setShowRight(false)
            return slidesContainer.current.scrollLeft += slidesContainer.current.children[0].clientWidth
        }
    }

    const moveLeft = () => {
        if(slidesContainer.current){
            // console.log(slidesContainer.current.scrollLeft)
            // slidesContainer.current.scrollLeft <= 211  && setShowLeft(false)
            // slidesContainer.current.scrollLeft <= 2500 && setShowRight(true)
            return slidesContainer.current.scrollLeft -= slidesContainer.current.children[0].clientWidth
        }
    }

    const handleScroll = () => {
        if (slidesContainer.current) {
          const { scrollLeft, scrollWidth, clientWidth } = slidesContainer.current;
        //   const modScrollWidth = (scrollWidth + ((scrollLeft + clientWidth) - scrollWidth) - 0.5);
          switch (scrollLeft + clientWidth) {
            //Scroll is utter left
            case clientWidth:
              setShowLeft(false);
              break;
            //Scroll is utter right
            case scrollWidth:
              setShowRight(false);
              break;
            //Scroll somewhere in between
            default:
              setShowLeft(true);
              setShowRight(true)
          }
        }
      };

    return(
        <div className="relative md:max-w-[100%]">
            <div onScroll={handleScroll} ref={slidesContainer} className="w-full py-10 h-fit flex snap-x snap-mandatory overflow-x-auto space-x-2 scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
                {props.children}
            </div>
            <div className={`absolute -top-14 -left-4 h-full items-center hidden ${showLeft && 'md:flex'}`}>
                <button onClick={moveLeft} role="button" className="drop-shadow-2xl px-4 py-4 rounded-full bg-slate-50 text-indigo-800 group" aria-label="prev"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>

                </button>
            </div>
            <div className={`absolute -top-14 -right-4 h-full items-center hidden ${showRight && 'md:flex'}`}>
                <button onClick={moveRight} role="button" className="drop-shadow-2xl px-4 py-4 rounded-full bg-slate-50 text-indigo-800 group" aria-label="next"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </button>
            </div>
        </div>
    )
}

export default SliderContainer;