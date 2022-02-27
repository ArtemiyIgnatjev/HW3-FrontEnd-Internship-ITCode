let saveButton = document.getElementById('saveButton');
let Total = document.getElementById('total');
let i = -1; //переменная для подсчета количества задач

saveButton.addEventListener('click', () =>{
    addTask()
    
    inputTitle.value = '';
    inputDescription.value = '';
    total.textContent = i;
})

const tasks = [
    {
        Title : 'Начните работу с To Do List!',
        Description : '',
    }
]

outputTasks();

function addTask() {
    let Title = document.getElementById('inputTitle');
    let Description = document.getElementById('inputDescription');

    let obj = {
        TitleEL : Title.value,
        DescriptionEL : Description.value,
    }

    tasks.push(obj);

    createTask(Title.value, Description.value)
}

function createTask(Title, Description) {
    const taskElement = document.querySelector('.tasks')
    let div = document.createElement('div')
    let par = document.createElement('p')
    let span = document.createElement('span')
    i++


    par.innerHTML = Title
    span.innerHTML = Description

    div.classList.add('task')

    div.append(par);
    div.append(span);

    taskElement.append(div);
}

function outputTasks() {
    tasks.map((task) => {
        createTask(task.Title, task.Description);
    })
}
