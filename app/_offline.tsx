import Head from 'next/head';
import Image from 'next/image';
import Logo from './components/navbar/Logo';
import Button from './components/Button';
import { useRouter } from "next/navigation";


const router = useRouter();

const Fallback = () => (
  <>
    <Head>
      <title>Tomb Raider Archives</title>
    </Head>
    <div className='w-full flex flex-col items-center p-6'>
        <Logo/>
        <div className='w-full mt-12 flex flex-col'>
            <div className='text-xl font-semibold'>You are currently offline</div>
            <div className='py-6 text-lg flex flex-col'>
                <div>Please click to reconnect to the homepage</div>
                <Button label='Reconnect' onClick={() => router.push(`/`)}/>
            </div>
        </div>
    </div>
  </>
)

export default Fallback