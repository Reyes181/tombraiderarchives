import React, { Component } from 'react';
import Image from 'next/image';
import Container from './Container';

interface ErrorProps {
    children: React.ReactNode
}

class ErrorBoundary extends Component<ErrorProps> {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    // Perform error logging here
    console.log({ error, errorInfo })
  }
  render() {
    if (this.state.hasError) {
      // Display an error message or redirect to another page
      return (
        <Container>
            <div className="h-screen flex flex-col justify-center items-center pb-10">
                <Image
                    className="w-auto h-1/6 xl:h-aut mb-4"
                    src="/images/logo.png"
                    alt="Logo"
                    width={540}
                    height={304}
                />
                <div className="flex flex-col text-3xl md:text-4xl font-extrabold uppercase text-zinc-300 tracking-wide text-center">
                    <div>No!<br/> <span className="text-4xl lg:text-5xl text-black tracking-tight">Something went wrong, please refresh the page.</span></div>
                </div>
            </div>
        </Container>
      )
    }
    return this.props.children;
  }
}
export default ErrorBoundary;