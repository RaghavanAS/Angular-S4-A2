//creating a namespace which has an interface and function
var Namespace1;
(function (Namespace1) {
    //defining a function which takes interface object as an parameter
    function printMessage(I1) {
        console.log("" + I1.str);
    }
    Namespace1.printMessage = printMessage;
})(Namespace1 || (Namespace1 = {}));
//# sourceMappingURL=Namespace1.js.map