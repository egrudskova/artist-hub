import React from 'react';
import MainPage from '../../pages/main.tsx';
import ErrorBoundary from '../error/error-boundary.tsx';

const App = (): React.JSX.Element => {
  return (
    <ErrorBoundary>
      <MainPage></MainPage>
    </ErrorBoundary>
  );
};

export default App;
