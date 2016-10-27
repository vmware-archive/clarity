
export class ClrResponsiveNavControlMessage {
    constructor(private _controlCode: string, private _navLevel: number) {}

    get controlCode(): string {
        return this._controlCode;
    }

    get navLevel(): number {
        return this._navLevel;
    }
}
