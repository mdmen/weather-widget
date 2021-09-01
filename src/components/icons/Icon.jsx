// @flow
import * as React from 'react';
import type { Icons } from 'common/types';

type Props = {
  name: Icons,
  className?: string,
};

export const Icon = ({ name, className = '' }: Props): React.Node => {
  const id = `icon-${name}`;
  const classes = `icon ${id} ${className}`.trim();

  return (
    <svg
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={classes}
    >
      <use xlinkHref={`#${id}`} />
    </svg>
  );
};
