// @flow
import React from 'react';
import { ErrorWrapper } from './components/helpers/ErrorWrapper';
import { Widget } from './components/widget/Widget';
import { IconsProvider } from './components/icons/IconsProvider';
import { ParamsContext } from './components/context/ParamsContext';

type Props = {
  appId: string,
};

export const App = ({ appId }: Props): React$Node => (
  <React.StrictMode>
    <ErrorWrapper>
      <ParamsContext.Provider value={{ appId }}>
        <IconsProvider>
          <Widget />
        </IconsProvider>
      </ParamsContext.Provider>
    </ErrorWrapper>
  </React.StrictMode>
);
