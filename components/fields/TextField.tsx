'use client';

import { ElementsType, FormElement } from '../FormElements';
import { MdTextFields } from 'react-icons/md';

const type: ElementsType = 'TextField';

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: 'Text Field',
      helperText: 'Helper Text',
      required: false,
      placeHolder: 'Value here...',
    },
  }),

  designerBtnElement: {
    icon: MdTextFields,
    label: 'Text Field',
  },

  designerComponent: () => <div>Designer Component</div>,
  formComponent: () => <div>Form Component</div>,
  propertiesComponent: () => <div>Properties Component</div>,
};
