"use client";
import ToasterProvider from "./providers/ToasterProvider";
import { Suspense } from 'react';
import Loading from './loading';

const Providers = ({children}) => {
    return (
      <Suspense fallback={<Loading/>}>
        <>
          <ToasterProvider/>
          <div className='min-h-screen'>
              {children}
          </div>
        </>
      </Suspense>
    )
}

export default Providers;