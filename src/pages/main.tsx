import './main.css';
import React, { useState } from 'react';
import Search from '../components/search/search.tsx';
import Display from '../components/display/display.tsx';
import Logo from '../assets/images/logo.svg?react';
import { Track } from '../services/types.ts';
import ErrorButton from '../components/error/error-button.tsx';
import Loader from '../components/loader/loader.tsx';

const MainPage = (): React.JSX.Element => {
  const [searchData, setSearchData] = useState<Track[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchDataChange = (data: Track[] | []): void => {
    setSearchData(data);
  };

  const handleLoadingStatusChange = (flag: boolean): void => {
    setIsLoading(flag);
  };

  return (
    <>
      <header className="header">
        <ErrorButton></ErrorButton>
        <a href="#" className="header__link">
          <Logo></Logo>
        </a>
        <Search onLoadingStatusChange={handleLoadingStatusChange} onSearchDataChange={handleSearchDataChange}></Search>
      </header>
      <main className="main">
        <h1 className="main__heading visually-hidden">Main page</h1>
        <Loader isLoading={isLoading}></Loader>
        <Display cards={searchData}></Display>
      </main>
    </>
  );
};

export default MainPage;
