var STATUS;
(function (STATUS) {
    STATUS["CREATED"] = "CREATED";
    STATUS["PROCESS"] = "PROCESS";
    STATUS["FINISH"] = "FINISH";
})(STATUS || (STATUS = {}));
let todoStatus = STATUS.CREATED;
let todoStatusProcessing = STATUS.PROCESS;
let totoFinis = STATUS.FINISH;
console.log("DEBUG-CODE: totoFinis", totoFinis);
if (todoStatus) {
    let doIt;
    doIt = "Let go to do";
    console.log("DEBUG-CODE: doIt", doIt);
}
