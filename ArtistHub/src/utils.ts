import { APIRequestParams, APIResponseFormats } from './types.ts';

export const getRandomInt = (min: number, max: number): number => Math.round(Math.random() * (max - min) + min);

export const buildApiRequest = ({
  userInput = '',
  APIMethod,
  APIMethodCategory,
  APIResponseFormat = APIResponseFormats.JSON,
  APIResponseLimit = 30,
  APIResponsePage = 1,
}: APIRequestParams): string => {
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
    [APIMethodCategory]: userInput,
    api_key: APIKey,
    format: APIResponseFormat,
    limit: APIResponseLimit.toString(),
    page: APIResponsePage.toString(),
  });
  return `${baseUrl}?${queryParams.toString()}`;
};
