//defeining reference path for the namespaces
/// <reference path="Namespace1.ts" />
/// <reference path="Namespace2.ts" />
//creating interface objects
var I1 = { str: "I Belong to First File" };
var I2 = { str: "I Belong to Second File" };
//passing the interface object I1 to function from the first namespace file
Namespace1.printMessage(I1);
//passing the interface object I2 to function from the second namespace file
Namespace1.myFunc(I2);
//# sourceMappingURL=ConsumingFile.js.map