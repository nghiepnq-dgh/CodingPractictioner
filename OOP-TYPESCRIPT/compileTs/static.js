var TaskStateOfTask;
(function (TaskStateOfTask) {
    TaskStateOfTask["CREATED"] = "create";
    TaskStateOfTask["DONE"] = "done";
})(TaskStateOfTask || (TaskStateOfTask = {}));
class TaskServiceOfClass {
    constructor(tasks) {
        TaskServiceOfClass.taskArr = tasks;
    }
    getItems() {
        return TaskServiceOfClass.taskArr;
    }
    static showItems() {
        for (let item of TaskServiceOfClass.taskArr) {
            console.log("-> item", TaskServiceOfClass.username, item);
        }
    }
}
TaskServiceOfClass.username = 'Nguyen';
let tasksItems = [
    {
        id: 1,
        name: 'sleep'
    },
    {
        id: 2,
        name: 'code',
        statusOfTask: TaskStateOfTask.CREATED
    }
];
let newObj = new TaskServiceOfClass(tasksItems);
newObj.getItems();
console.log("DEBUG-CODE: objTaskService", newObj);
console.log('>>>', TaskServiceOfClass.showItems());
