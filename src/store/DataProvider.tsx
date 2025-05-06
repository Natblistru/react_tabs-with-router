import React, { PropsWithChildren } from 'react';
import { DataContext, tabs } from './DataContext';

export const DataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <DataContext.Provider value={{ tabs }}>{children}</DataContext.Provider>
  );
};
