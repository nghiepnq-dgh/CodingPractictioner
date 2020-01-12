//static giup goi cac phuong thuc truc tiep tu class
// khong can khoi tao 1 doi tuong cho class do


//interface
enum TaskStateOfTask {
    CREATED = 'create',
    DONE = 'done'
}

interface TaskInter {
    id: number;
    name: string;
    statusOfTask?: TaskStateOfTask;
}

class TaskServiceOfClass {

    public static username:string = 'Nguyen';

    static taskArr: TaskInter[];
    constructor(tasks: TaskInter[]) {
        TaskServiceOfClass.taskArr = tasks;
    }

    //method
    getItems(){
        return TaskServiceOfClass.taskArr
    }

    static showItems () {
        for (let item of TaskServiceOfClass.taskArr) {
        console.log("-> item",TaskServiceOfClass.username , item)

        }
    }
}

let tasksItems: TaskInter[] = [
    {
        id: 1,
        name: 'sleep'
    },
    {
        id: 2,
        name: 'code',
        statusOfTask: TaskStateOfTask.CREATED
    }
]

let newObj = new TaskServiceOfClass(tasksItems)

newObj.getItems()
console.log("DEBUG-CODE: objTaskService", newObj)

console.log('>>>',TaskServiceOfClass.showItems())

// console.log(TaskService.username)