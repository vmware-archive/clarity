export const primaryDisallowedClass = 'btn';

export const additionalDisallowedClasses = ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger'];

export const disallowedButtonsSelector = additionalDisallowedClasses.map(
  cls => `button.${primaryDisallowedClass}.${cls}`
);
