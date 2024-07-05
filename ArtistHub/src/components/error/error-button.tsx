import './error-button.css';
import React from 'react';

export default class ErrorButton extends React.Component {
  render(): React.JSX.Element {
    return (
      <button
        className={'error-button'}
        onClick={() => {
          throw new Error('The error in button component.');
        }}
      >
        Throw error
      </button>
    );
  }
}
