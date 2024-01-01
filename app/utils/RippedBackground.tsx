"use client"

interface RippedBackgroundProps {
    option: string;
}

export const rippedImages = [
    {
      option: '1',
      img: '/images/rippedOne.png'
    },
    {
        option: '2',
        img: '/images/rippedTwo.png'
    },
    {
        option: '3',
        img: '/images/rippedThree.png'
    }
  ];



const RippedBackground: React.FC<RippedBackgroundProps> = ({
    option
}) => {
    return(
        <div
            className="
                relative
                w-full
                h-32
                sm:h-fit
                overflow-hidden
            "
        >
            {rippedImages.map((item) => {
                if(item.option === option) {
                    return(
                        <img
                            src={item.img}
                            alt='Ripped Comic Page'
                            key={item.option}
                            className="
                                object-cover
                                object-right
                                h-full
                                sm:h-auto
                                sm:w-auto
                            "
                        />
                    )
                }
            })}
        </div>
    )
}

export default RippedBackground;