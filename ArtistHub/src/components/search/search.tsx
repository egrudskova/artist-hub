import React from 'react';
import './search.css';
import { buildApiRequest } from '../../utils.ts';
import {
  APIMethods,
  APIMethodsCategories,
  APIRequestOptionalParams,
  APIRequestRequiredParams,
  APIResponse,
  InputChangeHandler,
  Track,
} from '../../types.ts';

interface SearchProps {
  onSearchDataChange: (data: Track[] | []) => void;
}

export default class Search extends React.Component<SearchProps> {
  state = {
    category: APIMethodsCategories.Track,
    input: '',
  };

  componentDidMount(): void {
    void this.fetchSearchData(...this.prepareFetchParams());
    const LSInput: string = localStorage.getItem('input') ?? '';
    this.setState({ input: LSInput });
  }

  handleInputChange = (evt: InputChangeHandler): void => {
    this.setState({ input: evt.target.value });
  };

  prepareFetchParams = (input?: string): [APIRequestRequiredParams, APIRequestOptionalParams] => {
    let required: APIRequestRequiredParams;
    let optional: APIRequestOptionalParams = {};
    if (input) {
      required = {
        APIMethodCategory: this.state.category,
        APIMethod: APIMethods.Search,
      };
      optional = { [this.state.category]: this.state.input };
    } else {
      required = {
        APIMethodCategory: APIMethodsCategories.Chart,
        APIMethod: APIMethods.GetTopTracks,
      };
    }
    return [required, optional];
  };

  fetchSearchData = async (
    requiredParams: APIRequestRequiredParams,
    optionalParams: APIRequestOptionalParams
  ): Promise<void> => {
    const response = await fetch(buildApiRequest(requiredParams, optionalParams));
    const json: APIResponse = (await response.json()) as APIResponse;
    this.props.onSearchDataChange(json.results?.trackmatches?.track ?? json.tracks?.track ?? []);
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
            void this.fetchSearchData(...this.prepareFetchParams(this.state.input));
            localStorage.setItem('input', this.state.input);
          }}
        ></button>
      </section>
    );
  }
}
