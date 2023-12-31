'use client';

import React, { createContext, ReactNode, useState } from 'react';
import { FormElementInstance } from '../FormElements';

type DesignerContextType = {
  elements: FormElementInstance[];
  addElement: (index: number, element: FormElementInstance) => void;
  removeElement: (index: string) => void;
};

export const DesignerContext = React.createContext<DesignerContextType | null>(
  null
);

export default function DesignerContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [elements, setElements] = useState<FormElementInstance[]>([]);

  const addElement = (index: number, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  const removeElement = (id: string) => {
    setElements((prev) => prev.filter((element) => element.id !== id));
  };

  return (
    <DesignerContext.Provider
      value={{
        elements,
        addElement,
        removeElement,
      }}
    >
      {children}
    </DesignerContext.Provider>
  );
}
