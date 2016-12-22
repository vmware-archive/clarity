import { NgModule } from '@angular/core';

import { SketchTemplateLinkDirective } from './sketch-template-link.directive';
import {AnchorLinksHandler} from "./anchor-links-handler.service";

@NgModule({
  declarations: [
    SketchTemplateLinkDirective
  ],
  exports: [
    SketchTemplateLinkDirective
  ]
})
export class UtilsModule { }
