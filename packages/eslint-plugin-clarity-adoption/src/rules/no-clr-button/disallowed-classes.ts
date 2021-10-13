export const primaryDisallowedClass = 'btn';

export const additionalDisallowedClasses = [
  'btn-info',
  'btn-success',
  'btn-warning',
  'btn-danger',
  'btn-primary',
  'btn-outline',
  'btn-info-outline',
  'btn-success-outline',
  'btn-danger-outline',
  'btn-warning-outline',
  'btn-secondary',
  'btn-secondary-outline',
  'btn-outline-secondary',
  'btn-block',
  'btn-inverse',
  'btn-icon',
  'btn-link',
  'btn-sm',
];

export const disallowedButtonsSelector = additionalDisallowedClasses.map(
  cls => `button.${primaryDisallowedClass}.${cls}`
);
