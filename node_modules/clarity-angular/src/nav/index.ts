import { Type } from "@angular/core";

import { Header } from "./header";
import { NavLevelDirective } from "./navLevelDirective";

export * from "./header";
export * from "./navLevelDirective";

export const NAVIGATION_DIRECTIVES: Type<any>[] = [
    Header,
    NavLevelDirective
];
