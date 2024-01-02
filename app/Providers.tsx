"use client";
import ToasterProvider from "./providers/ToasterProvider";
import { Suspense } from 'react';
import Loading from './loading';
import ErrorBoundary from "./components/ErrorBoundary";

const Providers = ({children}) => {
    return (
      <Suspense fallback={<Loading/>}>
        <ErrorBoundary>
          <ToasterProvider/>
          <div className='min-h-screen'>
              {children}
          </div>
        </ErrorBoundary>
      </Suspense>
    )
}

export default Providers;