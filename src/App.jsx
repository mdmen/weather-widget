// @flow
import * as React from 'react';
import { ErrorWrapper } from 'components/helpers/ErrorWrapper';
import { Widget } from 'components/widget/Widget';
import { IconsProvider } from 'components/icons/IconsProvider';
import { SettingsContext } from 'components/context/SettingsContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { measureUnitsDefault as measureUnits } from 'common/config';

type Props = {
  appId: string,
};

export const App = ({ appId }: Props): React.Node => (
  <React.StrictMode>
    <ErrorWrapper>
      <SettingsContext.Provider value={{ appId, measureUnits }}>
        <IconsProvider />
        <DndProvider backend={HTML5Backend}>
          <Widget />
        </DndProvider>
      </SettingsContext.Provider>
    </ErrorWrapper>
  </React.StrictMode>
);
