import React, {
  useState,
  Context,
  useMemo,
  useEffect,
  createContext,
  useContext,
} from 'react';
import { dataTransformed, restaurantRequest } from './restaurant.service';

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

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantRequest('41.878113,-87.629799')
        .then((data: any) => dataTransformed(data.results))
        .then((camelizeData) => setRestaurants(camelizeData))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }, 2000);
  }, []);

  return (
    <RestaurantContext.Provider
      value={{ restaurant: restaurants, isLoading, error }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
