import './main.css';
import React, { useState } from 'react';
import Search from '../components/search/search.tsx';
import Display from '../components/display/display.tsx';
import Logo from '../assets/images/logo.svg?react';
import { APIMethodsCategories } from '../services/types.ts';
import ErrorButton from '../components/error/error-button.tsx';
import Loader from '../components/loader/loader.tsx';
import { useLastFMLoader, useLocalStorage } from '../hooks/hooks.ts';

const MainPage = (): React.JSX.Element => {
  const [category] = useState(APIMethodsCategories.Track);
  const [searchRequest, setSearchRequest] = useLocalStorage().request;
  const [searchData, isLoading] = useLastFMLoader(category, searchRequest);

  const handleSearchRequestChange = (request: string): void => {
    setSearchRequest(request);
  };

  return (
    <>
      <header className="header">
        <ErrorButton></ErrorButton>
        <a href="#" className="header__link">
          <Logo></Logo>
        </a>
        <Search handleSearchRequestChange={handleSearchRequestChange}></Search>
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
