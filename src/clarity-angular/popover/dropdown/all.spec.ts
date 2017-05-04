import { addHelpers } from "../../data/datagrid/helpers.spec";
import DropdownSpecs from "./dropdown.spec";
import DropdownMenuSpecs from "./dropdown-menu.spec";

describe("Dropdown", function() {
    addHelpers();

    describe("Components", function() {
        DropdownSpecs();
        DropdownMenuSpecs();
    });
});
