// @flow
import * as React from 'react';
import cn from 'classnames';
import type { Icons } from '../../common/types';

type Props = {
  name: Icons,
  className?: string,
};

export const Icon = ({ name, className }: Props): React.Node => (
  <svg
    aria-hidden="true"
    viewBox="0 0 32 32"
    className={cn(['icon', `icon-${name}`, className])}
  >
    <use xlinkHref={`#icon-${name}`} />
  </svg>
);
