"use client"
import Container from "../components/Container";
import Image from "next/image";

const BackupContainer = () => {
    return(
        <Container>
            <div className="h-screen flex flex-col justify-center items-center pb-10">
                <Image
                    className="w-auto h-1/6 xl:h-aut mb-4"
                    src="/images/logo.png"
                    alt="Logo"
                    width={540}
                    height={304}
                />
                <div className="flex flex-col text-3xl md:text-4xl font-extrabold uppercase text-zinc-300 tracking-wide text-center">
                    <div>Page <br/> <span className="text-4xl lg:text-5xl text-black tracking-tight">Coming Soon</span></div>
                </div>
            </div>
        </Container>
    )
}

export default BackupContainer;