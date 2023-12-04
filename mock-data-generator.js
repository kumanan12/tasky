let assignees = ["Krrithik", "Bill", "Steve"];
let tasks = [];

// Create 20 tasks
for (let i = 1; i <= 20; i++) {
    let task = {
        assignedTo: '',
        status: 'unassigned',
        name: `Task ${i}`,
        description: `This is task ${i}`
    };
    tasks.push(task);
}

// Assign tasks randomly
for (let task of tasks) {
    task.assignedTo = assignees[Math.floor(Math.random() * assignees.length)];
}

console.log(tasks);