import React, { useState } from 'react';

import { Active, DragOverlay, useDndMonitor } from '@dnd-kit/core';
import { SideBarBtnElementDragOverlay } from './SideBarBtnElement';
import { FormElements, ElementsType } from './FormElements';

const DragOverlayWrapper = () => {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);

  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
    onDragCancel(event) {
      setDraggedItem(null);
    },
    onDragEnd(event) {
      setDraggedItem(null);
    },
  });

  if (!draggedItem) {
    return null;
  }

  let node = <div>No drag overlay</div>;
  const isSideBarBtnElement = draggedItem.data?.current?.isDesignerBtnElement;

  if (isSideBarBtnElement) {
    const type = draggedItem.data?.current?.type as ElementsType;
    node = <SideBarBtnElementDragOverlay formElement={FormElements[type]} />;
  }

  return <DragOverlay>{node}</DragOverlay>;
};

export default DragOverlayWrapper;
