// @flow
import * as React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useDrag, useDrop } from 'react-dnd';
import { Icon } from '../icons/Icon';
import type { Location } from '../../common/types';

type Props = {
  index: number,
  location: Location,
  locations: Array<Location>,
  removeLocation: (id: string) => void,
  moveLocation: (dragIndex: number, hoverIndex: number) => void,
};

export const WidgetMenuLocation = ({
  index,
  location,
  locations,
  moveLocation,
  removeLocation,
}: Props): React.Node => {
  const ref = React.useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: 'location',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveLocation(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: 'location',
    item: () => {
      return { id: location.id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <ListGroup.Item
      ref={preview}
      style={{ opacity: isDragging ? 0 : 1 }}
      data-handler-id={handlerId}
      className="d-flex align-items-center justify-content-between"
    >
      <Button
        ref={ref}
        disabled={locations.length <= 1}
        className="widget-menu__btn widget-menu__btn--drag"
        size="sm"
        variant="light"
      >
        <Icon name="dots" />
      </Button>
      {location.city}, {location.country}
      <Button
        onClick={() => removeLocation(location.id)}
        className="cursor-drag widget-menu__btn"
        size="sm"
        variant="light"
      >
        <Icon name="trash" />
      </Button>
    </ListGroup.Item>
  );
};
