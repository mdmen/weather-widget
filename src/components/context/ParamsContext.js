// @flow
import { createContext } from 'react';

type ParamsContextType = {
  appId: string,
};

export const ParamsContext: React$Context<ParamsContextType> = createContext(
  {}
);
ParamsContext.displayName = 'ParamsContext';
