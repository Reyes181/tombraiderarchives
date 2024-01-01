"use client"

import Container from "../Container";
import Image from "next/image";

export const companylogos = [
    {
      name: 'Dark Horse',
      logo: '/images/darkhorse_grey.png',
      height: '60%',
      width: 'auto'
    },
    {
      name: 'Top Cow Comics',
      logo: '/images/topcow_grey.png',
      height: '60%',
      width: 'auto'
    },
    {
      name: 'Tomb Raider',
      logo: '/images/tombraider_grey.png',
      height: '80%',
      width: 'auto'
    },
    {
      name: 'Crystal Dynamics',
      logo: '/images/crystaldynamic_grey.png',
      height: '60%',
      width: 'auto'
    }
  ];

  const HomeHero = () => {
    return(
        <section className="relative max-w-[2520px] mx-auto h-fit">
        <div className="bg-[url('/images/greenhero.png')] bg-cover h-fit lg:h-4/5">
          <div className="h-fit lg:h-full w-full bg-gradient-to-b from-black via-transparent to-black py-6">
            <Container>
              <div className="h-fit lg:h-full flex flex-col md:flex-row items-center gap-2 2xl:w-4/5 w-full m-auto">
                <div className="grow h-full flex items-center justify-center overflow-hidden basis-6/12 pt-5 md:pt-0">
                  <Image
                      alt="Logo"
                      className="md:block w-4/5 sm:w-7/12 lg:w-auto"
                      height={300}
                      width={300}
                      src="/images/Arch1_Book.png"
                  />
                </div>
                <div className="
                  grow-0 
                  h-full 
                  flex 
                  flex-col
                  items-center
                  justify-evenly
                  py-6 
                  basis-6/12
                ">
                  <div className="
                        xl:text-6xl
                        lg:text-5xl
                        flex 
                        flex-col 
                        justify-center 
                        items-center
                        font-extrabold 
                        text-4xl 
                        text-center 
                        uppercase
                  ">
                      <div className="
                        drop-shadow-md 
                        bg-gradient-to-b from-white via-neutral-300 to-neutral-400 bg-clip-text text-transparent
                      ">Tomb Raider</div>
                      <div className="
                        drop-shadow-md 
                        bg-gradient-to-b from-white via-neutral-300 to-neutral-400 bg-clip-text text-transparent
                      ">Archives</div>
                  </div>
                  <div className="
                      py-4 lg:py-0 
                      flex flex-col justify-between text-center 
                      uppercase 
                      items-center 
                      w-4/5 md:w-full">
                    <div className="
                      font-light 
                      text-lg lg:text-2xl 
                      bg-gradient-to-b from-white via-neutral-300 to-neutral-400 bg-clip-text text-transparent
                    ">
                      {`Theres only one woman capable of tracking down the world's rarest artifacts.`}
                    </div>
                    <div className="
                      mt-1 md:mt-5 
                      font-bold 
                      text-xl lg:text-3xl 
                      tracking-widest 
                      bg-gradient-to-b from-teal-200 via-teal-300 to-teal-500 bg-clip-text text-transparent
                    ">Lara Croft</div>
                  </div>
                  <div className="
                    w-full
                    lg:w-4/5
                    pt-4
                    flex
                    flex-row
                    items-center
                    justify-between
                  ">
                      {companylogos.map((item, i) => (
                        <Image
                          key={i}
                          alt={item.name}
                          className="md:block"
                          height="100"
                          width="100"
                          src={item.logo}
                          style={{
                            width: item.width,
                            height: item.height
                          }}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>
    )
  };

  export default HomeHero;