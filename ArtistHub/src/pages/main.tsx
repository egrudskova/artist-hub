import './main.css';
import React from 'react';
import Search from '../components/search/search.tsx';
import Display from '../components/display/display.tsx';
import Logo from '../assets/images/logo.svg?react';

export default class MainPage extends React.Component {
  render(): React.JSX.Element {
    return (
      <>
        <header className="header">
          <a href="#" className="header__link">
            <Logo></Logo>
          </a>
          <Search></Search>
        </header>
        <main className="main">
          <h1 className="main__heading visually-hidden">Main page</h1>
          <Display cards={[]}></Display>
        </main>
      </>
    );
  }
}
