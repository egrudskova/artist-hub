import './main.css';
import React from 'react';
import Search from '../components/search/search.tsx';
import Display from '../components/display/display.tsx';
import Logo from '../assets/images/logo.svg?react';
import { Track } from '../services/types.ts';
import ErrorButton from '../components/error/error-button.tsx';
import Loader from '../components/loader/loader.tsx';

export default class MainPage extends React.Component {
  state = {
    searchData: [],
    isLoading: false,
  };

  handleSearchDataChange = (data: Track[] | []): void => {
    this.setState({ searchData: data });
  };

  handleLoadingStatusChange = (flag: boolean): void => {
    this.setState({ isLoading: flag });
  };

  render(): React.JSX.Element {
    return (
      <>
        <header className="header">
          <ErrorButton></ErrorButton>
          <a href="#" className="header__link">
            <Logo></Logo>
          </a>
          <Search
            onLoadingStatusChange={this.handleLoadingStatusChange}
            onSearchDataChange={this.handleSearchDataChange}
          ></Search>
        </header>
        <main className="main">
          <h1 className="main__heading visually-hidden">Main page</h1>
          <Loader isLoading={this.state.isLoading}></Loader>
          <Display cards={this.state.searchData}></Display>
        </main>
      </>
    );
  }
}
