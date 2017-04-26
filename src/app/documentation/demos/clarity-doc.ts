export class ClarityDocComponent{
    ui: number = -1;
    ng: number = -1;
    title: string = "";
    newLayout: boolean = false;

    constructor(title: string, ui: number, ng: number, newLayout: boolean) {
        this.ui = ui;
        this.ng = ng;
        this.title = title;
        this.newLayout = newLayout;
    }
}
