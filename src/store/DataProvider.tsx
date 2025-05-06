import React, { PropsWithChildren, useContext } from 'react';
import { DataContext } from './DatatContext';

export const DataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { tabs } = useContext(DataContext);

  return (
    <DataContext.Provider value={{ tabs }}>{children}</DataContext.Provider>
  );
};
