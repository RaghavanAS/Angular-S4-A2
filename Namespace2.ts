//providing the reference path for the first namespace
/// <reference path="Namespace1.ts" />
//adding additional fucntionality to the namespace
namespace Namespace1{
    //defining a function which takes interface object as a paerameter
export function myFunc(I2:Greeter){
    console.log(`${I2.str}`);
}
}