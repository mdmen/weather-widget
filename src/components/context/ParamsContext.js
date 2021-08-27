// @flow
import * as React from 'react';
import type { MeasureUnits } from '../../common/types';

type ParamsContextType = {
  appId: string,
  measureUnits: MeasureUnits,
};

export const ParamsContext: React.Context<ParamsContextType> =
  React.createContext({});
ParamsContext.displayName = 'ParamsContext';
