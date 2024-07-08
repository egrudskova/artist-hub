import React from 'react';
import './loader.css';

interface LoaderProps {
  isLoading: boolean;
}

export default class Loader extends React.Component<LoaderProps> {
  render(): React.JSX.Element {
    return this.props.isLoading ? <div className={'loader'}></div> : <></>;
  }
}
