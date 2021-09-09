import React from 'react';
import { ComponentItem } from './ComponentItem';
import { componentItems } from './config';

const libraryComponents = componentItems.filter((item) => !item.disabled);

export function Toolbox() {
  return (
    <div className="Toolbox">
      <div className="tip">Drag and drop a form component into a term</div>
      <div>
        {libraryComponents.map((item) => (
          <ComponentItem key={item.type} type={item.type} />
        ))}
      </div>
    </div>
  );
}
