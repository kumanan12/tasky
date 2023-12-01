

let tasks = [];

let task = {
    assignedTo: 'Krrithik',
    status: 'unassigned',
    name: 'Sample Task',
    description: 'This is a sample task'
}
tasks.push(task);

localStorage.setItem('tasks', JSON.stringify(tasks));
localStorage.setItem('name', 'Krrithik');
/* 
    list of status = unassigned, not-started, started, pending, complete
    let task = {
        assignedTo: 'Krrithik'
        status: 
    }
*/
function changeUser() {
    let name = document.getElementById('user').value;
    localStorage.setItem('currentUser', name);
    document.getElementById('currentUser').innerHTML = name;
}

function displayUser() {
    let name = localStorage.getItem('currentUser');
    document.getElementById('currentUser').innerHTML = name;
}

displayUser();