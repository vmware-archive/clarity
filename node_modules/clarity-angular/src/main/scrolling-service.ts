import {Injectable, Inject} from "@angular/core";
import {DOCUMENT} from "@angular/platform-browser";

@Injectable()
export class ScrollingService {
    constructor(@Inject(DOCUMENT) private _document: any) {
    }

    stopScrolling(): void {
        this._document.body.classList.add("no-scrolling");
    }

    resumeScrolling(): void {
        if (this._document.body.classList.contains("no-scrolling")) {
            this._document.body.classList.remove("no-scrolling");
        }
    }
}
