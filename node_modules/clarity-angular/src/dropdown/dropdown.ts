import {
    Component,
    Directive,
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
        <ng-content select=".dropdown-toggle"></ng-content>
        <ng-content select=".dropdown-menu"></ng-content>
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
    onMouseClick(target: any): void {
        if (this._open) {
            let current: any = target; //Get the element in the DOM on which the mouse was clicked
            let dropdownHost: any = this.elementRef.nativeElement; //Get the current dropdown native HTML element

            //Start checking if current and dropdownHost are equal. If not traverse to the parentNode and check again.
            while (current) {
                if (current === dropdownHost) {
                    return;
                }
                current = current.parentNode;
            }
            this._open = false; //Remove .open from the dropdown
        }
    }
}

@Directive({
    selector: ".dropdown-toggle"
})
export class DropdownToggle {

    constructor(private _dropdown: Dropdown) {
    }

    @HostListener("click")
    onDropdownToggleClick(): void {
        this._dropdown.toggleDropdown();
    }
}

@Directive({
    selector: ".dropdown-item"
})
export class DropdownMenuItem {

    constructor(private _dropdown: Dropdown, private el: ElementRef) {
    }

    @HostListener("click")
    onDropdownItemClick(): void {
        if (this._dropdown.isMenuClosable && !this.el.nativeElement.classList.contains("disabled")) {
            this._dropdown.toggleDropdown();
        }
    }
}

export const DROPDOWN_DIRECTIVES: any[] = [
    Dropdown,
    DropdownToggle,
    DropdownMenuItem
];
