import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  
  render() {
    if (this.state.hasError)
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-hal-content-bg text-hal-navy p-6 text-center">
          <p className="text-2xl font-bold mb-4 font-rajdhani">Connection issue or Application Error</p>
          <p className="text-hal-text mb-8">Please wait or try again if the issue persists.</p>
          <button 
            className="btn-primary"
            onClick={() => {
              this.setState({ hasError: false });
              window.location.reload();
            }}
          >
            Retry Connection
          </button>
        </div>
      );
    return this.props.children;
  }
}

export default ErrorBoundary;
