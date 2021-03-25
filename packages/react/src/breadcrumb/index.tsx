import { CdsBreadcrumb as Breadcrumb } from '@cds/core/breadcrumb';
import '@cds/core/breadcrumb/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsBreadcrumb = createComponent('cds-breadcrumb', Breadcrumb);
