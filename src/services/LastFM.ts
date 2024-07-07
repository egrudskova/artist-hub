import {
  APIMethods,
  APIMethodsCategories,
  APIRequestOptionalParams,
  APIRequestRequiredParams,
  APIResponse,
  APIResponseFormats,
  Track,
} from './types.ts';

export default class LastFM {
  private buildApiRequest = (
    {
      APIMethod,
      APIMethodCategory,
      APIResponseFormat = APIResponseFormats.JSON,
      APIResponseLimit = 30,
      APIResponsePage = 1,
    }: APIRequestRequiredParams,
    optionalParams: APIRequestOptionalParams
  ): string => {
    const baseUrl = typeof import.meta.env.VITE_API_URL === 'string' ? import.meta.env.VITE_API_URL : undefined;

    if (typeof baseUrl !== 'string') {
      throw new Error('API_URL is not provided.');
    }

    const APIKey = typeof import.meta.env.VITE_API_KEY === 'string' ? import.meta.env.VITE_API_KEY : undefined;

    if (typeof APIKey !== 'string') {
      throw new Error('API_KEY is not provided.');
    }

    const queryParams: URLSearchParams = new URLSearchParams({
      method: `${APIMethodCategory}.${APIMethod}`,
      api_key: APIKey,
      format: APIResponseFormat,
      limit: APIResponseLimit.toString(),
      page: APIResponsePage.toString(),
      ...optionalParams,
    });
    return `${baseUrl}?${queryParams.toString()}`;
  };

  private prepareFetchParams = (
    category: APIMethodsCategories,
    input?: string
  ): [APIRequestRequiredParams, APIRequestOptionalParams] => {
    let required: APIRequestRequiredParams;
    let optional: APIRequestOptionalParams = {};
    if (input) {
      required = {
        APIMethodCategory: category,
        APIMethod: APIMethods.Search,
      };
      optional = { [category]: input };
    } else {
      required = {
        APIMethodCategory: APIMethodsCategories.Chart,
        APIMethod: APIMethods.GetTopTracks,
        APIResponseLimit: 1000,
      };
    }
    return [required, optional];
  };

  fetchSearchData = async (
    listener: (data: Track[] | []) => void,
    category: APIMethodsCategories,
    input?: string
  ): Promise<void> => {
    const response = await fetch(this.buildApiRequest(...this.prepareFetchParams(category, input)));
    const json: APIResponse = (await response.json()) as APIResponse;
    listener(json.results?.trackmatches?.track ?? json.tracks?.track ?? []);
  };
}
