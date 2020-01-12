//interface
enum TaskState {
    CREATED = 'create',
    DONE = 'done'
}

interface TaskInter {
    id: number;
    name: string;
    status?: TaskState;
}

class TaskService {
    taskArr: TaskInter[];
    constructor(tasks: TaskInter[]) {
        this.taskArr = tasks;
    }

    //method
    getItems(){
        return this.taskArr
    }
}

let tasksItem: TaskInter[] = [
    {
        id: 1,
        name: 'sleep'
    },
    {
        id: 2,
        name: 'code',
        status: TaskState.CREATED
    }
]

let objTaskService = new TaskService(tasksItem)

objTaskService.getItems()
console.log("DEBUG-CODE: objTaskService", objTaskService)