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
  removeLocation: (id: number) => void,
  swapLocations: (dragIndex: number, hoverIndex: number) => void,
};

export const WidgetMenuLocation = ({
  index,
  location,
  swapLocations,
  removeLocation,
}: Props): React.Node => {
  const dragRef = React.useRef(null);
  const dropRef = React.useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: 'location',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (!dragRef.current || !dropRef.current || dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = dragRef.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (
        (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) ||
        (dragIndex > hoverIndex && hoverClientY > hoverMiddleY)
      ) {
        return;
      }

      swapLocations(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: 'location',
    item: () => ({ index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const targetDragRef = drag(dragRef);
  const previewDropRef = drop(preview(dropRef));

  return (
    <ListGroup.Item
      ref={previewDropRef}
      style={{ opacity: isDragging ? 0 : 1 }}
      className="d-flex align-items-center justify-content-between"
      data-handler-id={handlerId}
    >
      <Button
        ref={targetDragRef}
        className="widget-menu__btn widget-menu__btn--drag"
        variant="light"
        tabIndex="-1"
        size="sm"
        as="div"
      >
        <Icon name="dots" />
      </Button>
      <span>
        {location.city}, {location.country}
      </span>
      <Button
        onClick={() => removeLocation(location.id)}
        className="widget-menu__btn"
        aria-label="Delete location"
        variant="light"
        size="sm"
      >
        <Icon name="trash" />
      </Button>
    </ListGroup.Item>
  );
};
