import { moduleMetadata } from '@storybook/angular';
import { withDesign } from 'storybook-addon-designs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { boolean, select } from '@storybook/addon-knobs';
import { ClrButtonModule } from '../../../projects/clr-angular/src/button';
import { ClrLoadingState } from '../../../projects/clr-angular/src/utils/loading/loading';

const basicTemplate = require('!!raw-loader!./basic.html');

export default {
  title: 'Button',
  decorators: [
    withDesign,
    moduleMetadata({
      imports: [ClrButtonModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  parameters: {
    design: [
      {
        name: 'Figma Light',
        type: 'figma',
        url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=20%3A0',
      },
      {
        name: 'Figma Dark',
        type: 'figma',
        url: 'https://www.figma.com/file/wRYSrWSffZXcdQuiolwkym/Clarity-UI-Library---dark-2.2.0?node-id=15%3A5832',
      },
    ],
  },
};

export const Basic = () => {
  const buttonSize = boolean('Small', false);

  const buttonType = select(
    'Type',
    {
      default: undefined,
      solidPrimary: 'btn-primary',
      solidSuccess: 'btn-success',
      solidWarning: 'btn-warning',
      solidDanger: 'btn-danger',
      outlineDefault: 'btn-outline',
      outlineSuccess: 'btn-success-outline',
      outlineInfo: 'btn-info-outline',
      outlineWarning: 'btn-warning-outline',
      outlineDanger: 'btn-danger-outline',
      flatButton: 'btn-link',
    },
    undefined
  );
  const disabled = boolean('Disabled', false);
  const buttonBlock = boolean('Block', false);
  const buttonInverse = boolean('Inverse', false);
  const buttonIcon = boolean('Icon Button', false);
  let validateBtnState = ClrLoadingState.DEFAULT;
  let submitBtnState = ClrLoadingState.DEFAULT;

  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: {
      buttonType,
      disabled,
      buttonSize,
      buttonBlock,
      buttonInverse,
      buttonIcon,
      validateDemo: () => {
        {
          submitBtnState = ClrLoadingState.LOADING;
          setTimeout(() => (this.submitBtnState = ClrLoadingState.DEFAULT), 1500);
        }
      },
      submitDemo: () => {
        validateBtnState = ClrLoadingState.LOADING;
        setTimeout(() => (this.validateBtnState = ClrLoadingState.SUCCESS), 1500);
      },
    },
  };
};
