let taskFormel = document.getElementById('task-form');
let taskInputel = document.getElementById('task-el');


taskFormel.addEventListener('submit',function(e){
    e.preventDefault();
    createTask();
})


let taskList = localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];

function createTask(){

    let task = taskInputel.value.trim();
    let taskObj = {taskVal:task,isCompleted:false}

    taskList.unshift(taskObj);


    localStorage.setItem('tasks',JSON.stringify(taskList))

    console.log(taskList);

    taskInputel.value = ''

}




function displayTasks(){
    
    if(taskList.length!=0){
        let eachTask= ``


        taskList.forEach((task)=>{
            eachTask+= ` <li class="list-group-item list-group-item-primary mb-3">
                            <span class="text-dark">
                                <input type="checkbox" id="check_me">
                                ${task.taskVal}
                            </span>
                            <button class="btn btn-primary ">
                                <i class="bi bi-pen"></i>
                            </button>
                            <button class="btn btn-danger mr-2">
                                <i class="bi bi-trash"></i>
                            </button>
                        </li>`
        });        

        document.getElementById('task-list').innerHTML = eachTask
    }
}


displayTasks();





