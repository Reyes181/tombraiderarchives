import './globals.scss';
import Navbar from './components/navbar/Navbar';
import HeaderMobile from './components/navbar/MobileNavbar';
import ClientOnly from './components/ClientOnly';
import type { Metadata } from 'next';
import localFont from 'next/font/local'
import ToasterProvider from './providers/ToasterProvider';
import Providers from './Providers';
import Image from 'next/image';


const univers = localFont({
  src: [
    {
      path: './utils/fonts/UniversLTStd-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './utils/fonts/UniversLTStd-Bold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './utils/fonts/UniversLTStd-XBlack.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './utils/fonts/UniversLTStd-XBlackEx.otf',
      weight: '900',
      style: 'normal',
    },
  ],
});

export const companylogos = [
  {
    name: 'Dark Horse',
    logo: '/images/darkhorse_grey.png',
    height: '40%',
    width: 'auto'
  },
  {
    name: 'Top Cow Comics',
    logo: '/images/topcow_grey.png',
    height: '40%',
    width: 'auto'
  },
  {
    name: 'Tomb Raider',
    logo: '/images/tombraider_grey.png',
    height: '60%',
    width: 'auto'
  },
  {
    name: 'Crystal Dynamics',
    logo: '/images/crystaldynamic_grey.png',
    height: '40%',
    width: 'auto'
  }
];

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  title: 'TR Archives',
  description: 'Tomb Raider comics from the Top Cow Archives, as well as comics of the rebooted series by Dark Horse.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="Tomb Raider Archives" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TR Archives" />
        <meta name="description" content="Tomb Raider comics from the Top Cow Archives, as well as comics of the rebooted series by Dark Horse." />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#019188" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-adsense-account" content={`ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}></meta>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#fffff" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={univers.className}>
        <ClientOnly>
          <ToasterProvider/>
          <Navbar/>
          <HeaderMobile/>
        </ClientOnly>
        <Providers>{children}</Providers>
        <footer className='bg-[#18171B] h-fit w-full text-slate-300 flex flex-col justify-center items-start font-light text-xs tracking-wide'>
          <div className='w-full py-16 px-12'>
            <div className='flex flex-col pb-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='p-1 pl-0 flex flex-col'>
                  <span>Tomb Raider Archives Volume 1</span>
                  <span className='text-xs text-slate-400'>Tomb Raider&trade; &#169; 1999-2001, 2016 Square Enix.</span>
                </div>
                <div className='p-1 pl-0 flex flex-col'>
                  <span>Tomb Raider Archives Volume 2</span>
                  <span className='text-xs text-slate-400'>Tomb Raider&trade; &#169; 2001-2003, 2017 Square Enix.</span>
                </div>
                <div className='p-1 pl-0 flex flex-col'>
                  <span>Tomb Raider Archives Volume 3</span>
                  <span className='text-xs text-slate-400'>Tomb Raider&trade; &#169; 2003-2005, 2017 Square Enix.</span>
                </div>
                <div className='p-1 pl-0 flex flex-col'>
                  <span>Tomb Raider Archives Volume 4</span>
                  <span className='text-xs text-slate-400'>Tomb Raider&trade; &#169; 2000-2005, 2018 Square Enix.</span>
                </div>
              </div>

              <div className='w-full border bg-slate-400 mb-4'/>

              <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex flex-col text-slate-400 text-justify'>
                  <div>Developed by Crystal Dynamics. Tomb Raider, Crystal Dynamics, Square Enix,
                    and their respective logos are trademarks and/or registered trademarks of Square Enix Holding Co., Ltd. Dark Horse Books&#174;
                    and the Dark Horse logo are registered trademarks of Dark Horse Comics, Inc. Names, characters, places, and incidents featured in this publication either are the product of the author&apos;s imagination or are used
                    ficitiously. Any resemblance to actual persons (living or dead), events, institutions, or locales, without satiric intent, is coincidental.
                  </div>
                </div>

                <div className="
                    w-full
                    lg:w-4/5
                    pt-4
                    flex
                    flex-row
                    items-center
                    justify-center
                  ">
                      <Image className='w-auto h-2/5 md:h-1/5 lg:h-2/5' alt="Dark Horse" height="100" width="100" src="/images/darkhorse_grey.png"/>
                      <Image className='w-auto h-2/5 md:h-1/5 lg:h-2/5' alt="Top Cow Comics" height="100" width="100" src="/images/topcow_grey.png"/>
                      <Image className='w-auto h-3/5 md:h-2/5 lg:h-3/5' alt="Tomb Raider" height="100" width="100" src="/images/tombraider_grey.png"/>
                      <Image className='w-auto h-2/5 md:h-1/5 lg:h-2/5' alt="Crystal Dynamics" height="100" width="100" src="/images/crystaldynamic_grey.png"/>
                  </div>
              </div>
                   
            </div>
          </div>
          <div className='text-center w-full px-12 text-slate-400'>Site Published By E.R.</div>
        </footer>
      </body>
    </html>
  )
}
