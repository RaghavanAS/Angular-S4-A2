//creating a namespace which has an interface and function
//# sourceMappingURL=Namespace1.js.map;
//providing the reference path for the first namespace
/// <reference path="Namespace1.ts" />
//adding additional fucntionality to the namespace
//# sourceMappingURL=Namespace2.js.map;
//defeining reference path for the namespaces
/// <reference path="Namespace1.ts" />
/// <reference path="Namespace2.ts" />
//creating interface objects
//passing the interface object I1 to function from the first namespace file
//passing the interface object I2 to function from the second namespace file
//# sourceMappingURL=ConsumingFile.js.map
var Namespace1
!function(e){function a(e){console.log(""+e.str)}e.printMessage=a}(Namespace1||(Namespace1={}))
var Namespace1
!function(e){function a(e){console.log(""+e.str)}e.myFunc=a}(Namespace1||(Namespace1={}))
var I1={str:"I Belong to First File"},I2={str:"I Belong to Second File"}
Namespace1.printMessage(I1),Namespace1.myFunc(I2)
