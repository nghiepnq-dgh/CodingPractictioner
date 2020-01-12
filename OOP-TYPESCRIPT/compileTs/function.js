function noReturn() {
    console.log("Hello, this is function no return");
}
function returnNumber() {
    return 1;
}
function returnArr() {
    return ['a', 'b'];
}
function showInfoFuntion(name, age = 20) {
    return `my name ${name} - ${age}`;
}
showInfoFuntion("Nguyen Van A", 32);
function showInfoFuntion2(name, age) {
    return `my name ${name} - ${age ? age : ''}`;
}
showInfoFuntion("Nguyen Van A");
function test(x, y) {
    return x.length + y.length;
}
function restPargam(name, ...list) {
    console.log("DEBUG-CODE: list", list);
    return `my name ${name} - ${list.join(",")}`;
}
restPargam("Nguyen Van A", "32", "45", "52");
