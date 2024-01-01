import type { Metadata } from 'next';
import ClientOnly from "./components/ClientOnly";
import HomeArchives from "./components/home/HomeArchives";
import HomeHero from "./components/home/HomeHero";
import HomeDH from "./components/home/HomeDH";
import RippedBackground from "./utils/RippedBackground";
import Banner from "./components/Banner";
import { Suspense } from "react";
import HomeSkeleton from "./utils/HomeSkeleton";

export const metadata: Metadata = {
  title: 'Home | TR Archives',
  description: 'Tomb Raider comics from the Top Cow Archives, as well as comics of the rebooted series by Dark Horse.'
}

export default async function Home() {
  
  return (
    <ClientOnly>
      <Suspense fallback={<HomeSkeleton/>}>
        <div className="flex flex-col">
          <HomeHero/>
          <RippedBackground option="1"/>
          <HomeArchives/>
          <RippedBackground option="2"/>
          <HomeDH/>
          <Banner/>
        </div>
      </Suspense>
    </ClientOnly>
  )
}
