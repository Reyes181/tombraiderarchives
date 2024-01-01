import type { Metadata } from 'next';
import BackupContainer from "../utils/BackupContainer";

export const metadata: Metadata = {
    title: 'Media | TR Archives',
    description: 'A collection of literature media of the Tomb Raider series.',
    alternates: {
        canonical: '/media'
    }
}

const MoreMediaPage = () => {
    return (
        <BackupContainer/>
    )
}

export default MoreMediaPage