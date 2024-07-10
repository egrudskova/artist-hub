import { APIMethodsCategories, Track } from '../services/types.ts';
import React, { useEffect, useState } from 'react';
import LastFM from '../services/LastFM.ts';

const lastFM = new LastFM();

export const useLastFMLoader = (category: APIMethodsCategories, request: string): [Track[] | [], boolean] => {
  const [data, setData] = useState<Track[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    void lastFM
      .fetchSearchData(category, request)
      .then((searchData) => {
        setData(searchData);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [category, request]);

  return [data, isLoading];
};

interface LocalStorageHookReturn {
  request: [string, React.Dispatch<React.SetStateAction<string>>];
  input: [string, React.Dispatch<React.SetStateAction<string>>];
}

export const useLocalStorage = (): LocalStorageHookReturn => {
  const [searchRequest, setSearchRequest] = useState(localStorage.getItem('input') ?? '');
  const [input, setInput] = useState(searchRequest);
  useEffect(() => {
    return () => {
      localStorage.setItem('input', input);
    };
  }, [input]);
  return { request: [searchRequest, setSearchRequest], input: [input, setInput] };
};
