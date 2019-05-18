//**** strict typeof return ****
function sayHi1(name) {
    return "Hello " + name;
    // return 1;
}
//**** void or undefined ****
function sayHi2(name) {
    console.log(1);
    // return "Hello " + name;
}
//**** any ****
function sayHi3(name) {
    return name;
}
// let boo: number = sayHi3(3);
// let boo1: string = sayHi3(3);
//**** Generic ****
function sayHi4(name) {
    return name;
}
// let foo: number = sayHi4(3);
// let foo1: string = sayHi4(3);
