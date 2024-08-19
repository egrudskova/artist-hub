import './error-button.css';
import React from 'react';

export default class ErrorButton extends React.Component {
  state = {
    error: false,
  };

  handleClick = (): void => {
    this.setState({ error: true });
  };

  render(): React.JSX.Element {
    if (this.state.error) {
      throw new Error('The error in button component.');
    }
    return (
      <button
        className={'error-button'}
        onClick={() => {
          this.handleClick();
        }}
      >
        Throw error
      </button>
    );
  }
}
