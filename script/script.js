var inputData = document.querySelector('#inputTask');
var btnAddTask = document.querySelector('#btn-add');
var ulList = document.querySelector('#list');
var spans = document.getElementsByTagName('span');
var lis = document.getElementsByTagName('li');
var btnInfoDeveloper = document.querySelector('#btn-modal');
var close = document.querySelector('#close');
var counterActive = document.querySelector('#counter-active');
var counterInactive = document.querySelector('#counter-inactive');

//<li>Task1 <span>Delete</span></li>
//<li><div class="task-name">Task1</div> <span>Delete</span></li>

function createTask(){
    var inputValue = inputData.value;
    inputData.value = '';

    if (inputValue.trim() !== ''){
        var newLi = document.createElement('li');
        var taskName = document.createElement('div');

        taskName.innerText = inputValue + createTaskDate();
        taskName.setAttribute('class', 'task-name');

        var newSpan = document.createElement('span');
        newSpan.innerText = ' Delete';

        ulList.append(newLi);
        newLi.append(taskName);
        newLi.append(newSpan);

        removeTask();

        readTask();
    }
}

btnAddTask.onclick = createTask;

function removeTask(){
    for (let spanItem of spans){
        spanItem.onclick = function(){
            spanItem.parentElement.remove();
        }
    }
}

removeTask();

function createTaskDate(){
    var currentTaskDate = new Date();
    var day = currentTaskDate.getDate();
    var month = currentTaskDate.getMonth() + 1;
    var year = currentTaskDate.getFullYear();
    return ' Дата добавления: ' + day + ' ' + month + ' ' + year; 
}

function readTask(){
    for (let task of lis){
        task.onclick = function(){
            //task.setAttribute('class', 'li-read-task');
            task.firstElementChild.style.textDecoration = 'line-through';
            task.lastElementChild.style.textDecoration = 'none';
            counter();
        }
            
    }

    counter();

}

readTask();

function infoDeveloper(){
    var modalInfo = document.querySelector('.modal-body');
    modalInfo.setAttribute('class', 'modal-body modal-body-visible');
    close.onclick = function(){
        modalInfo.setAttribute('class', 'modal-body');
    }
}

btnInfoDeveloper.onclick = infoDeveloper;

function counter(){
    var active = 0;
    var inactive = 0;

    for (let task of lis){
        if (task.firstElementChild.style.textDecoration === 'line-through'){
            ++inactive;
        } else {
            ++active;
        }
        
    }
    counterInactive.innerText = inactive;
    counterActive.innerText = active;
}

