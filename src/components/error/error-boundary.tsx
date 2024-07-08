import './error-boundary.css';
import React, { ErrorInfo } from 'react';

interface ErrorProps {
  children: React.JSX.Element;
}

interface ErrorState {
  errorMessage: string;
}

export default class ErrorBoundary extends React.Component<ErrorProps> {
  state = {
    errorMessage: '',
  };

  static getDerivedStateFromError(error: Error): ErrorState {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log(error.toString(), info.componentStack);
  }

  render(): React.JSX.Element {
    if (this.state.errorMessage) {
      return (
        <div className={'error'}>
          <h1 className={'error__header'}>Something went wrong.</h1>
        </div>
      );
    }
    return this.props.children;
  }
}
