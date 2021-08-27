// @flow
import * as React from 'react';
import { ErrorWrapper } from './components/helpers/ErrorWrapper';
import { Widget } from './components/widget/Widget';
import { IconsProvider } from './components/icons/IconsProvider';
import { ParamsContext } from './components/context/ParamsContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { measureUnitsDefault } from './common/config';

type Props = {
  appId: string,
};

export const App = ({ appId }: Props): React.Node => (
  <React.StrictMode>
    <ErrorWrapper>
      <ParamsContext.Provider
        value={{ appId, measureUnits: measureUnitsDefault }}
      >
        <IconsProvider />
        <DndProvider backend={HTML5Backend}>
          <Widget />
        </DndProvider>
      </ParamsContext.Provider>
    </ErrorWrapper>
  </React.StrictMode>
);
