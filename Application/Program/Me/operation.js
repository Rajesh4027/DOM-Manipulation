let taskFormel = document.getElementById('task-form');
let taskInputel = document.getElementById('task-el');



taskFormel.addEventListener('submit',function(e){
    e.preventDefault();

    if(taskInputel.value===''){
        alert(`You must write something!`)
    }
    else{
        createTask();
    }
    
})


let taskList = localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];

function createTask(){

    let task = taskInputel.value.trim();
    let taskObj = {taskVal:task,isCompleted:false}

    taskList.unshift(taskObj);


    localStorage.setItem('tasks',JSON.stringify(taskList))

    displayTasks();

    taskInputel.value = ''

}




function displayTasks(){
    
    if(taskList.length!=0){
        let eachTask= ``


        taskList.forEach((task,index)=>{
            eachTask+= ` <li class="list-group-item list-group-item-primary mb-3" id="con">
                            <span class="text-dark">
                                <input type="checkbox" >
                                <span id="myText">${task.taskVal}</span>
                            </span>
                            <button class="btn btn-primary"  onclick="updateTask(${index})">
                                <i class="bi bi-pen"></i>
                            </button>
                            <button class="btn btn-danger mr-2" onclick="deleteTask(${index})">
                                <i class="bi bi-trash" ></i>
                            </button>
                        </li>`
        });        

        document.getElementById('task-list').innerHTML = eachTask
    }
}



function deleteTask(index){

    taskList.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(taskList));
    displayTasks();
    
}

function updateTask(index){

    taskInputel.value = taskList[index].taskVal;
    taskList.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(taskList));
    displayTasks();

}










