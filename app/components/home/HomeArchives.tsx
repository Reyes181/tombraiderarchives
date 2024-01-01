import { getArchives } from "../../actions/getArchives";
import VolumeCard from "../cards/VolumeCard";


export default async function HomeArchives() {
    
    const archives = await getArchives();
    return(
        <div className="
            relative
            w-full
            h-fit
            flex flex-col
            xl:px-20
            md:px-10
            sm:px-2
            px-4
            py-8
        ">
            <div className="
                w-full
                flex flex-col
                sm:py-5
            ">
                <div className="
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
                    <div>Volume <br/> <span className="text-5xl md:text-4xl lg:text-5xl text-black tracking-tight">Selection</span></div>
                    <hr className="w-1/4 h-0.5 bg-teal-500"/>
                </div>
                <p className="
                    text-neutral-500
                    w-10/12
                    lg:w-8/12
                    text-justify
                    font-light
                    text-2xl
                    sm:text-lg
                    m-auto
                    pb-5
                ">
                    In 2016, to celebrate twenty years of the iconic Lara Croft, the Top Cow Tomb Raider comics were made available in a deluxe oversize format. 
                    There were four volumes released in total. Each volume contains a dozen+ issues of the series, along with a cover gallery featuring the art of numerous superstar artists.
                </p>
            </div>
            <div className="
                w-full
                h-fit
                flex flex-col sm:flex-row 
                justify-between
                py-4
            ">
                {archives.map((item) => (

                    <VolumeCard
                        key={item.id}
                        data={item}
                    />
                ))}
            </div>
        </div>
    )
}
