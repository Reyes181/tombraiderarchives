import prisma from '../libs/prismadb';

interface IParams {
    id?: string
}


export async function getComicsById(params: IParams){
    try {
        const {id} = params;
        
        const comics = await prisma.comics.findMany({
            where:{
                arch: id
            }
        });

        if(!comics){
            return null;
        }

        return comics;
    } catch(error: any){
        console.log(params)
        throw new Error(error);
    }
}

export async function getArtsById(params: IParams){
    const {id} = params;

    try{
        const arts = await prisma.arts.findMany({
            where:{
                arch: id
            }
        });

        if(!arts){
            return null
        }

        return arts
    } catch(error: any){
        throw new Error(error);
    }
}

export async function getDHComicsById(dhID){
    try {
        
        const dhcomics = await prisma.dHComics.findMany({
            where:{
                dhArchID: dhID
            }
        });

        if(!dhcomics){
            return null;
        }

        return dhcomics;
    } catch(error: any){
        throw new Error(error);
    }
}


export async function getComicById(params: IParams){
    try {
        const {id} = params;
        
        const archive = await prisma.comics.findUnique({
            where: {
                id: id
            }
        });

        if(!archive){
            return null;
        }
        
        return archive;
    } catch(error: any){
        console.log(params)
        throw new Error(error);
    }
}

export async function getDHComicById(params: IParams){
    try {
        const {id} = params;
        
        const comic = await prisma.dHComics.findUnique({
            where: {
                id: id
            }
        });

        if(!comic){
            return null;
        }
        
        return comic;
    } catch(error: any){
        console.log(params)
        throw new Error(error);
    }
}

export async function getRandomComics({archID, comicID, dhComic}){
    try {
        if(dhComic){
            const comics = await prisma.dHComics.findMany({
                where:{
                    dhArchID: archID
                }
            });
    
            if(!comics){
                return null;
            }
    
            return comics.filter((comic) => comic.id !== comicID).sort(() => Math.random() - 0.5).slice(0,5)
        }
        const comics = await prisma.comics.findMany({
            where:{
                arch: archID
            }
        });

        if(!comics){
            return null;
        }

        return comics.filter((comic) => comic.id !== comicID).sort(() => Math.random() - 0.5).slice(0,5)
    } catch(error: any){
        throw new Error(error);
    }
}