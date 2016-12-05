import {Injectable} from "@angular/core";
import {Subject, Observable} from "rxjs";
import {TreeSelection} from "../tree-selection";

@Injectable()
export class TreeSelectionService {

    selectable: boolean = false;

    //Boolean not necessary. Just emitting any value will indicate that a change has occurred
    private _change: Subject<boolean> = new Subject<boolean>();

    public get change(): Observable<boolean> {
        return this._change.asObservable();
    };

    notify(): void {
        this._change.next(true);
    }

    verifyTreeSelection(selection: TreeSelection): void {
        if (!selection.hasOwnProperty("selected")) {
            throw "clrTreeSelection should have the selected property";
        }

        //Check if the "children" property exists and is of type array
        if (selection.hasOwnProperty("children")) {
            if (Object.prototype.toString.call(selection.children) !== "[object Array]") {
                throw "clrTreeSelection should be of type array. Received type " +
                    typeof selection.children;
            }
            selection.children.forEach(child => this.verifyTreeSelection(child));
        }
    }
}