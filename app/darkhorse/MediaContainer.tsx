"use client"
import Container from "../components/Container";
import Image from "next/image";
import {BiSolidChevronsRight} from "react-icons/bi";
import { useRouter } from "next/navigation";

const MediaContainer = (props) => {
    const bookData = props.bookData;
    const router = useRouter();

    return (
        <Container>
            <section className="relative flex flex-col w-full h-fit my-6 lg:flex-row lg:flex-wrap">
                <div className="
                    flex
                    flex-col
                    uppercase
                    font-bold
                    md:font-semibold
                    tracking-wide
                    text-3xl
                    md:text-2xl
                    text-center
                    md:text-left
                    items-center
                    md:items-start
                    pb-5
                    md:pb-10
                    lg:basis-full
                    
                ">
                    <span>More To Read</span>
                    <hr className="w-1/4 h-0.5 bg-teal-500"/>
                </div>
                <div className="lg:w-[60%] relative px-4 lg:px-0 grid grid-cols-1 gap-2 my-10 md:my-6 md:grid-cols-3 md:gap-x-3 md:h-64">
                    <Image
                        className="mx-auto md:mx-0 w-auto h-full md:h-4/6 lg:h-5/6"
                        src="/images/bookCoverA.png"
                        alt="Book Cover"
                        width={296}
                        height={368}
                    />
                    <Image
                        className="w-auto h-full hidden md:block md:h-4/6 lg:h-5/6 md:mx-4"
                        src="/images/bookCoverB.png"
                        alt="Book Cover"
                        width={296}
                        height={368}
                    />
                    <Image
                        className="w-auto h-full hidden md:block md:h-4/6 lg:h-5/6"
                        src="/images/bookCoverC.png"
                        alt="Book Cover"
                        width={296}
                        height={368}
                    />
                </div>
                <div className="lg:w-[40%] relative my-10 md:my-6 flex flex-col">
                    <div className="w-4/5 lg:w-auto text-2xl md:text-xl font-normal capitalize flex flex-col">
                        <span>Selections Of Books</span>
                        <hr className="w-full h-0.5 bg-black"/>
                    </div>

                    <div className="w-full lg:w-auto h-fit flex flex-col">
                        <ul className="w-full lg:w-auto flex flex-col py-10 md:py-6">
                            {bookData.map((data, i) => (
                                <li key={i} className="py-4 md:py-2 w-full flex flex-col">
                                    <div className="truncate text-2xl md:text-xl font-semibold mb-1 text-[#00bbca] hover:text-[#005e65] cursor-pointer">{data.name}</div>
                                    <div className="flex justify-between md:justify-start text-sm flex-wrap font-light">
                                        {data.authors.map((author, i) => (
                                            <span key={i} className="md:pr-2">{author}</span>
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative flex w-full uppercase cursor-pointer text-xl md:text-lg hover:font-semibold underline underline-offset-8">
                        <span onClick={() => router.push(`/media`)}>More Selections</span>
                        <BiSolidChevronsRight
                            size={24}
                        />                  
                    </div>
                </div>
            </section>
        </Container>
    )
    
}

export default MediaContainer