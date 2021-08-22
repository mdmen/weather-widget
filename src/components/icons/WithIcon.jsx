// @flow
import * as React from 'react';
import { Icon } from './Icon';
import type { Icons } from '../../common/types';

type Props = {
  name: Icons,
  children: React.Node,
};

export const WithIcon = ({ name, children }: Props): React.Node => (
  <>
    <Icon className="me-1" name={name} />
    <span className="align-middle">{children}</span>
  </>
);
