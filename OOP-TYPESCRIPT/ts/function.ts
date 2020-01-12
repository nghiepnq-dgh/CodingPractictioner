function noReturn(): void {
    console.log("Hello, this is function no return")
}

function returnNumber(): number {
    return 1
}

function returnArr(): string[] {
    return ['a', 'b']
}

//pargam

function showInfoFuntion(name: string, age: number = 20): any {
return `my name ${name} - ${age}`
}
showInfoFuntion("Nguyen Van A", 32)


//Co cung duoc khong co cung duoc
function showInfoFuntion2(name: string, age?: number): any {
    return `my name ${name} - ${age ? age : ''}`
    }
    showInfoFuntion("Nguyen Van A")

function test(x : (string | any[]), y: string[]): number {
    return x.length + y.length
}

function restPargam(name: string, ...list: string []):string {
    console.log("DEBUG-CODE: list", list)
    //list is arr -> use join to changestring
    return `my name ${name} - ${list.join(",")}`
}
restPargam("Nguyen Van A", "32", "45", "52")