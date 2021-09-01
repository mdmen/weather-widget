// @flow
import * as React from 'react';
import type { MeasureUnits } from 'common/types';

export type SettingsContextType = {
  appId: string,
  measureUnits: MeasureUnits,
};

export const SettingsContext: React.Context<SettingsContextType> =
  React.createContext({});
SettingsContext.displayName = 'SettingsContext';
