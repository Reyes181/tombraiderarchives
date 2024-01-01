import prisma from '../libs/prismadb';

interface IParams {
    id?: string
}

export async function getArchives() {
    try {
        const archives = await prisma.arches.findMany({
            orderBy: {
                name: "asc"
            }
        });
        // console.log(archives)
        return archives;
    } catch(error: any){
        console.log(error.message)
        throw new Error(error)
    }
}

export async function getArchiveById(params: IParams){
    try {
        const {id} = params;
        
        const archive = await prisma.arches.findUnique({
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

export async function getGalleryById(params: IParams){
    try {
        const {id} = params;
        
        const gallery = await prisma.gallery.findMany({
            where: {
                arch: id
            }
        });

        if(!gallery){
            return null;
        }

        return gallery;
    } catch(error: any){
        console.log(params)
        throw new Error(error);
    }
}

export async function getArchiveDeatil(arch){
    try {
        
        const archive = await prisma.arches.findUnique({
            where: {
                id: arch
            }
        });

        if(!archive){
            return null;
        }

        return archive;
    } catch(error: any){
        console.log(arch)
        throw new Error(error);
    }
}

export async function getDHDetail(arch){
    try {
        
        const archive = await prisma.dHArches.findUnique({
            where: {
                id: arch
            }
        });

        if(!archive){
            return null;
        }

        return archive;
    } catch(error: any){
        console.log(arch)
        throw new Error(error);
    }
}
