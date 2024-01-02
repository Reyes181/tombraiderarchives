import React, { Component } from 'react';

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
      return <h1>Oh no! Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;