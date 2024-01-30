import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ReactChildren } from '../restaurant/restaurant.context';
import { useApiStates } from '../../hooks/useApiStates';
import {
  locationCities,
  locationRequest,
  locationTransformed,
  results,
} from './location.service';
import { locations } from './location.mock';

export const LocationContext = createContext<{
  location: {
    data: {
      lat: string;
      lng: string;
    };
  };
  search: (searchTerm: locationCities) => unknown;
  keyword: string;
}>({
  location: {
    data: {
      lat: '',
      lng: '',
    },
  },
  search: () => null,
  keyword: '',
});

export const useLocationContext = () => useContext(LocationContext);

export const LocationContextProvider: React.FC<ReactChildren> = ({
  children,
}) => {
  const locationState = useApiStates();
  const [searchTerm, setSearchTerm] = useState<locationCities>('san francisco');

  const onSearch = useCallback(
    (searchTerm: locationCities) => {
      locationState.setIsLoading(true);
      const searchKeyWord = searchTerm.toLowerCase() as locationCities;
      setSearchTerm(searchKeyWord);
      locationRequest(searchKeyWord)
        .then((response) => {
          return locationTransformed(response as results);
        })
        .then((location) => {
          locationState.setData(location);
          locationState.setError(null);
        })
        .catch((err) => {
          locationState.setData(undefined);
          locationState.setError(err);
        });
      locationState.setIsLoading(false);
    },
    [locationState.data],
  ); // Empty dependency array because onSearch doesn't depend on any external variables

  useEffect(() => {
    onSearch('san francisco');
  }, []);
  return (
    <LocationContext.Provider
      value={{ location: locationState, search: onSearch, keyword: searchTerm }}
    >
      {children}
    </LocationContext.Provider>
  );
};
