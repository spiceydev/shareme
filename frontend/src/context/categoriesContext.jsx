import React, { createContext, useEffect, useMemo, useState } from 'react';
import { client } from '../client';
import { categoriesQuery } from '../utils/data';

export const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = categoriesQuery();
    setIsLoading(true);
    if (query) {
      client.fetch(`${query}`).then((data) => {
        setCategories(data);
        setIsLoading(false);
      });
    }
  }, []);

  const memoizedValue = useMemo(
    () => ({ categories, isLoading }),
    [categories, isLoading]
  );

  return (
    <CategoriesContext.Provider value={memoizedValue}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
