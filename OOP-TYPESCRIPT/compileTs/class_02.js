var TaskState;
(function (TaskState) {
    TaskState["CREATED"] = "create";
    TaskState["DONE"] = "done";
})(TaskState || (TaskState = {}));
class TaskService {
    constructor(tasks) {
        this.taskArr = tasks;
    }
    getItems() {
        return this.taskArr;
    }
}
let tasksItem = [
    {
        id: 1,
        name: 'sleep'
    },
    {
        id: 2,
        name: 'code',
        status: TaskState.CREATED
    }
];
let objTaskService = new TaskService(tasksItem);
objTaskService.getItems();
console.log("DEBUG-CODE: objTaskService", objTaskService);
