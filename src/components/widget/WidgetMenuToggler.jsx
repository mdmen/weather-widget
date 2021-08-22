// @flow
import * as React from 'react';
import { Icon } from '../icons/Icon';
import Button from 'react-bootstrap/Button';

type Props = {
  isMenuOpen: boolean,
  toggleMenu: () => void,
};

export const WidgetMenuToggler = ({
  isMenuOpen,
  toggleMenu,
}: Props): React.Node => {
  return (
    <div className="widget-toggler">
      <Button
        onClick={toggleMenu}
        className="widget-toggler__btn"
        size="sm"
        variant="light"
      >
        {isMenuOpen ? <Icon name="close" /> : <Icon name="gear" />}
        <span className="visually-hidden">
          {isMenuOpen ? 'Close settings' : 'Open settings'}
        </span>
      </Button>
    </div>
  );
};
