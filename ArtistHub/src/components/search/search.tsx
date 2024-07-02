import React from 'react';
import './search.css';
import { buildApiRequest } from '../../utils.ts';
import { APIMethods, APIMethodsCategories, APIResponseType, InputChangeHandler } from '../../types.ts';

export default class Search extends React.Component {
  state = {
    category: APIMethodsCategories.Track,
    result: [],
    input: '',
  };

  componentDidMount(): void {
    const LSInput: string = localStorage.getItem('input') ?? '';
    this.setState({ input: LSInput });
  }

  handleInputChange = (evt: InputChangeHandler): void => {
    this.setState({ input: evt.target.value });
  };

  fetchSearchData = async (input: string, category: APIMethodsCategories): Promise<void> => {
    const response = await fetch(
      buildApiRequest({
        userInput: input,
        APIMethodCategory: category,
        APIMethod: APIMethods.Search,
      })
    );
    const json: APIResponseType = (await response.json()) as APIResponseType;
    this.setState({ result: json.results[`${category}matches`] });
  };

  render(): React.JSX.Element {
    return (
      <section className="search">
        <label htmlFor="search" className="visually-hidden">
          Search the artist:
        </label>
        <input
          id="search"
          type="search"
          value={this.state.input}
          onChange={this.handleInputChange}
          className="search__input"
        />
        <button
          className="search__button"
          onClick={() => {
            void this.fetchSearchData(this.state.input, this.state.category);
            localStorage.setItem('input', this.state.input);
          }}
        ></button>
      </section>
    );
  }
}
