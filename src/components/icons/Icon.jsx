// @flow
import React from 'react';
import cn from 'classnames';

type IconProps = {
  name: string,
  className?: string,
};
export const Icon = ({ name, className }: IconProps): React$Node => (
  <svg aria-hidden="true" className={cn(['icon', `icon-${name}`, className])}>
    <use xlinkHref={`#icon-${name}`} />
  </svg>
);

type WithIconProps = {
  name: string,
  children: React$Node,
};
export const WithIcon = ({ name, children }: WithIconProps): React$Node => (
  <>
    <Icon className="me-1" name={name} />
    <span className="align-middle">{children}</span>
  </>
);
