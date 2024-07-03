import './main.css';
import React from 'react';
import Search from '../components/search/search.tsx';
import Display from '../components/display/display.tsx';
import Logo from '../assets/images/logo.svg?react';
import { Track } from '../types.ts';

export default class MainPage extends React.Component {
  state = {
    searchData: [],
  };

  handleSearchDataChange = (data: Track[] | []): void => {
    this.setState({ searchData: data });
  };

  render(): React.JSX.Element {
    return (
      <>
        <header className="header">
          <a href="#" className="header__link">
            <Logo></Logo>
          </a>
          <Search onSearchDataChange={this.handleSearchDataChange}></Search>
        </header>
        <main className="main">
          <h1 className="main__heading visually-hidden">Main page</h1>
          <Display cards={this.state.searchData}></Display>
        </main>
      </>
    );
  }
}
