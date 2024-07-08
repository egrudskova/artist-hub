import './error-button.css';
import React, { useState } from 'react';

const ErrorButton = (): React.JSX.Element => {
  const [error, setError] = useState(false);

  const handleClick = (): void => {
    setError(true);
  };

  if (error) {
    throw new Error('The error in button component.');
  }

  return (
    <button
      className={'error-button'}
      onClick={() => {
        handleClick();
      }}
    >
      Throw error
    </button>
  );
};

export default ErrorButton;
