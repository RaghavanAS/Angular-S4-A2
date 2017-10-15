//creating a namespace which has an interface and function
namespace Namespace1{
    //defining an interface
    export interface Greeter{
        str:string;
    }
    //defining a function which takes interface object as an parameter
     export function printMessage(I1:Greeter) {
        console.log(`${I1.str}`);
    }
}

