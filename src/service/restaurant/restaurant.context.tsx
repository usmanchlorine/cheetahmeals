import React, {
  useState,
  Context,
  useMemo,
  useEffect,
  createContext,
  useContext,
} from 'react';
import { dataTransformed, keys, restaurantRequest } from './restaurant.service';
import { useLocationContext } from '../location/location.context';
import { locationCities } from '../location/location.service';

export type ReactChildren = {
  children?: React.ReactNode;
};

export const RestaurantContext = createContext<{
  restaurant: any;
  isLoading: boolean;
  error: any;
}>({
  restaurant: [],
  isLoading: false,
  error: null,
});

export const useRestaurantContext = () => useContext(RestaurantContext); /// aik function hook banaya hai direct isko call karegha or destructer karlegha jaha karna hooga

export const RestaurantContextProvider: React.FC<ReactChildren> = ({
  children,
}) => {
  const [restaurants, setRestaurants] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useLocationContext();
  const locationCordinate = useMemo(() => {
    return `${location.data?.lat},${location.data?.lng}` as keys; //agar yaha par bari calculation hoti tu bhot faida hota idher
  }, [location]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantRequest(locationCordinate) //usecallback or usememo
        .then((data: any) => {
          console.log('chal gaya');
          return dataTransformed(data.results);
        })
        .then((camelizeData) => {
          setError(null);

          setRestaurants(camelizeData);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => setIsLoading(false));
    }, 2000);
  }, [location]);
  return (
    <RestaurantContext.Provider
      value={{ restaurant: restaurants, isLoading, error }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
