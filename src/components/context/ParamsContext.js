// @flow
import * as React from 'react';

type ParamsContextType = {
  appId: string,
};

export const ParamsContext: React.Context<ParamsContextType> =
  React.createContext({});
ParamsContext.displayName = 'ParamsContext';
