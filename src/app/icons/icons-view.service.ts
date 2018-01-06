import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from "rxjs/Subject";

const previewClasses: any = {
    "is-solid": false,
    "has-alert": false,
    "has-badge": false
};

@Injectable()
export class IconsViewService {

    /**
    * This service class is used to transfer values from IconsComponent to IconsSetsComponent.
    * */

    previewClasses: BehaviorSubject<any> = new BehaviorSubject<any>(previewClasses);

    searchValue: Subject<string> = new Subject<string>();
}
