import React from 'react';
import './loader.css';

interface LoaderProps {
  isLoading: boolean;
}

const Loader = ({ isLoading }: LoaderProps): React.JSX.Element => {
  return isLoading ? <div className={'loader'}></div> : <></>;
};

export default Loader;
