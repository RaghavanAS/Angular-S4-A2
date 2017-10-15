//providing the reference path for the first namespace
/// <reference path="Namespace1.ts" />
//adding additional fucntionality to the namespace
var Namespace1;
(function (Namespace1) {
    //defining a function which takes interface object as a paerameter
    function myFunc(I2) {
        console.log("" + I2.str);
    }
    Namespace1.myFunc = myFunc;
})(Namespace1 || (Namespace1 = {}));
//# sourceMappingURL=Namespace2.js.map