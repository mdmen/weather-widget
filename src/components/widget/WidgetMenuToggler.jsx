// @flow
import * as React from 'react';
import { Icon } from 'components/icons/Icon';
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
        aria-label={isMenuOpen ? 'Close settings' : 'Open settings'}
        variant="light"
        size="sm"
      >
        {isMenuOpen ? <Icon name="close" /> : <Icon name="gear" />}
      </Button>
    </div>
  );
};
