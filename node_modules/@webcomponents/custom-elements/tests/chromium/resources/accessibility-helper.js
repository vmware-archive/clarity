function buildAccessibilityTree(accessibilityObject, indent, allAttributesRequired, rolesToIgnore, targetObject, targetString) {
    if (rolesToIgnore) {
        for (var i = 0; i < rolesToIgnore.length; i++) {
            if (accessibilityObject.role  == 'AXRole: ' + rolesToIgnore[i])
                return true;
        }
    }

    var str = "";
    for (var i = 0; i < indent; i++)
        str += "    ";
    str += accessibilityObject.role;
    if (accessibilityObject.value)
        str += " AXValue: " + accessibilityObject.value;
    else if (accessibilityObject.name)
        str += " \"" + accessibilityObject.name + "\"";
    str += allAttributesRequired && accessibilityObject.role == '' ? accessibilityObject.allAttributes() : '';
    str += targetObject && accessibilityObject.isEqual(targetObject) ? "     " + targetString : '';
    str += "\n";

    document.getElementById("console").innerText += str;

    if (accessibilityObject.name.indexOf('End of test') >= 0)
        return false;

    var count = accessibilityObject.childrenCount;
    for (var i = 0; i < count; i++) {
        if (!buildAccessibilityTree(accessibilityObject.childAtIndex(i), indent + 1, allAttributesRequired, rolesToIgnore, targetObject, targetString))
            return false;
    }

    return true;
}
