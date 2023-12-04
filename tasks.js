function displayTasksToCards(){
    let assignedTasksCard = document.getElementById("assignedTasks");

    const currentUser= getCurrentUser();
    let assignedTasksForCurrentUser = dummyTasks.filter((task) => {
        return (task.assignedTo === currentUser && task.status === 'assigned');
    }); 
    
    let assignedTasksString = '';
    for (const task of assignedTasksForCurrentUser) {
        assignedTasksString+= `
        
       
        
        `;
    }
    assignedTasksCard.innerHTML = assignedTasksString;

    // get the assignd tasks card.
    // loop through the dummyTasks array and create a card for each task
    // assign the card to the assigned tasks card

    
}

displayTasksToCards();