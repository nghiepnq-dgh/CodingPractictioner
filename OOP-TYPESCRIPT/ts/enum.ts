/* luu cong viec o dang trang thai
vi du moi tao la 0, lon len la 20, gia la 60, chet 90
*/


// like constant
enum STATUS { CREATED = "CREATED", PROCESS = "PROCESS", FINISH = "FINISH" }

let todoStatus: STATUS = STATUS.CREATED;
let todoStatusProcessing: STATUS = STATUS.PROCESS;
let totoFinis: STATUS = STATUS.FINISH
console.log("DEBUG-CODE: totoFinis", totoFinis)

if (todoStatus) {
    let doIt: string;
    doIt = "Let go to do"
    console.log("DEBUG-CODE: doIt", doIt)
}