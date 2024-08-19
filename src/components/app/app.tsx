import React from 'react';
import MainPage from '../../pages/main.tsx';
import ErrorBoundary from '../error/error-boundary.tsx';

export default class App extends React.Component {
  render(): React.JSX.Element {
    return (
      <ErrorBoundary>
        <MainPage></MainPage>
      </ErrorBoundary>
    );
  }
}
