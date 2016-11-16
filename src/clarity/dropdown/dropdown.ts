import {
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    Input,
    Output,
    Renderer
} from "@angular/core";

const menuPositions: string[] = [
        "bottom-left",
        "bottom-right",
        "top-left",
        "top-right",
        "left-bottom",
        "left-top",
        "right-bottom",
        "right-top"
    ];

@Component({
    selector: "clr-dropdown",
    template: `
        <ng-content select="[clrDropdownToggle]"></ng-content>
        <ng-content></ng-content>
    `,
    host: {
        "[class.dropdown]" : "true"
    }
})
export class Dropdown {

    @HostBinding("class.open")
    @Input("clrDropdownMenuOpen")
    private _open: boolean = false;

    @Output("clrDropdownMenuOpenChange") private _openChanged: EventEmitter<boolean> = new EventEmitter<boolean>(false);

    @Input("clrCloseMenuOnItemClick") isMenuClosable: boolean = true;

    private _menuPosition: string;

    @Input("clrMenuPosition")
    set menuPosition(pos: string) {
        if (pos && (menuPositions.indexOf(pos) > -1)) {
            this._menuPosition = pos;
        } else {
            this._menuPosition = "bottom-left";
        }
        this.removeExistingDirectionClass();
        this.renderer.setElementClass(this.elementRef.nativeElement, this._menuPosition, true);
    }

    removeExistingDirectionClass(): void {
        let currentClassList: DOMTokenList = this.elementRef.nativeElement.classList;
        menuPositions.forEach((direction: string) => {
            if (currentClassList.contains(direction)) {
                currentClassList.toggle(direction);
            }
        });
    }

    constructor(private elementRef: ElementRef, private renderer: Renderer) {
    }

    toggleDropdown(): void {
        this.open = !this.open;
    }

    get open(): boolean {
        return this._open;
    }

    set open(val: boolean) {
        this._open = val;
        this._openChanged.emit(val);
    }

    //called on mouse clicks anywhere in the DOM.
    //Checks to see if the mouseclick happened on the host or outside
    @HostListener("document:click", ["$event.target"])
    onMouseClick(): void {
        if (this._open) {
            this._open = false; //Remove .open from the dropdown
        }
    }
}
