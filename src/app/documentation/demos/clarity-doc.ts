import {COMPONENT_MAP} from "../../utils/component-list";

export class ClarityDocComponent {
    ui: number = -1;
    ng: number = -1;
    title: string = "";
    newLayout: boolean = false;

    constructor(componentName: string) {
        let component = COMPONENT_MAP.get(componentName);
        this.populateComponentDetails(component.text, component.ui, component.ng, component.newLayout);
    }

    populateComponentDetails(title: string, ui: number, ng: number, newLayout: boolean) {
        this.ui = ui;
        this.ng = ng;
        this.title = title;
        this.newLayout = newLayout;
    }
}
