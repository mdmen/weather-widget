// @flow
import * as React from 'react';
import { iconsContent } from './content';

export const IconsProvider = (): React.Node => (
  <svg
    aria-hidden="true"
    className="visually-hidden"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      {Object.keys(iconsContent).map((icon) => {
        const Paths = iconsContent[icon];
        return (
          <symbol key={icon} id={`icon-${icon}`} viewBox="0 0 32 32">
            <Paths />
          </symbol>
        );
      })}
    </defs>
  </svg>
);
