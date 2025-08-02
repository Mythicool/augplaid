import React, { Component, ErrorInfo, ReactNode } from 'react';
import GlassSurface from './reactbits/GlassSurface';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center p-8">
          <GlassSurface className="p-8 text-center max-w-md">
            <h2 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h2>
            <p className="text-white/80 mb-6">
              We're sorry, but something unexpected happened. Please refresh the page or try again later.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-yellow-300 hover:bg-yellow-400 text-black rounded-full px-6 py-3 font-semibold transition-all duration-300"
            >
              Refresh Page
            </button>
          </GlassSurface>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
