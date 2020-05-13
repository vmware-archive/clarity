import { withDesign } from 'storybook-addon-designs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { select } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { ClrFormsModule } from '../../../projects/clr-angular/src/forms/forms.module';
import { Layouts } from 'projects/clr-angular/src/forms/common/providers/layout.service';

const basicTemplate = require('!!raw-loader!./basic.html');

export default {
  title: 'Forms',
  decorators: [
    withDesign,
    moduleMetadata({
      imports: [ClrFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  parameters: {
    // TODO(matt): I think I should combine all form elements into on story
    // But I started this way and will keep it for now.
    design: [
      {
        name: 'Figma Light',
        type: 'figma',
        url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=0%3A853',
      },
      {
        name: 'Figma Dark',
        type: 'figma',
        url: 'https://www.figma.com/file/wRYSrWSffZXcdQuiolwkym/Clarity-UI-Library---dark-2.2.0?node-id=364%3A4206',
      },
    ],
  },
};

// TODO: storybook doesn't update the inputs when user changes values.
export const Basic = () => {
  const model = {
    role: 'Design',
    name: 'BB8',
  };
  const formLayout = select(
    'Form Layout',
    {
      default: undefined,
      compact: Layouts.COMPACT,
      horizontal: Layouts.HORIZONTAL,
      vertical: Layouts.VERTICAL,
    },
    undefined
  );
  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      formLayout,
      model,
    },
  };
};
