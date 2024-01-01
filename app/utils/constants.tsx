import { SideNavItem } from "../types";

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Top Cow",
        path: "/archives",
        subMenu: true,
        subMenuItems: [
            {title: 'Volume 1', path: "/archives/63602c3db0cae374da076117", img: 'https://res.cloudinary.com/reyes181/image/upload/v1700515492/comics/MobileArch1_Transparent.png', color: '#ff3333'},
            {title: 'Volume 2', path: "/archives/63602c6fb0cae374da07611a", img: 'https://res.cloudinary.com/reyes181/image/upload/v1700515492/comics/MobileArch2_Transparent.png', color: '#fbb612'},
            {title: 'Volume 3', path: "/archives/63602c86b0cae374da07611d", img: 'https://res.cloudinary.com/reyes181/image/upload/v1700515492/comics/MobileArch3_Transparent.png', color: '#00acee'},
            {title: 'Volume 4', path: "/archives/63602ca0b0cae374da076120", img: 'https://res.cloudinary.com/reyes181/image/upload/v1701115113/comics/MobileArch4_Transparent.png', color: '#858ac2'}
        ]
    },
    {
        title: "Dark Horse",
        path: "/darkhorse",
        img: 'https://res.cloudinary.com/reyes181/image/upload/v1700515493/comics/MobileDH_Transparent.png',
        color: '#3730a3'
    },
    {
        title: "Media",
        path: "/media",
        img: 'https://res.cloudinary.com/reyes181/image/upload/v1700515493/comics/MobileMedia_Transparent.png',
        color: '#0c0c0c'
    }
]