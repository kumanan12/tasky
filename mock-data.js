const dummyTasks = [
  {
    assignedTo: "Steve",
     status: "assigned"
,
    name: "Task 1",
    description: "This is task 1",
  },
  {
    assignedTo: "Krrithik",
     status: "assigned"
,
    name: "Task 2",
    description: "This is task 2",
  },
  {
    assignedTo: "Bill",
     status: "assigned"
,
    name: "Task 3",
    description: "This is task 3",
  },
  {
    assignedTo: "Bill",
     status: "assigned"
,
    name: "Task 4",
    description: "This is task 4",
  },
  {
    assignedTo: "Krrithik",
     status: "assigned"
,
    name: "Task 5",
    description: "This is task 5",
  },
  {
    assignedTo: "Steve",
     status: "assigned"
,
    name: "Task 6",
    description: "This is task 6",
  },
  {
    assignedTo: "Bill",
     status: "assigned"
,
    name: "Task 7",
    description: "This is task 7",
  },
  {
    assignedTo: "Bill",
     status: "assigned"
,
    name: "Task 8",
    description: "This is task 8",
  },
  {
    assignedTo: "Steve",
     status: "assigned"
,
    name: "Task 9",
    description: "This is task 9",
  },
  {
    assignedTo: "Bill",
     status: "assigned"
,
    name: "Task 10",
    description: "This is task 10",
  },
  {
    assignedTo: "Bill",
     status: "assigned"
,
    name: "Task 11",
    description: "This is task 11",
  },
  {
    assignedTo: "Bill",
     status: "assigned"
,
    name: "Task 12",
    description: "This is task 12",
  },
  {
    assignedTo: "Krrithik",
     status: "assigned"
,
    name: "Task 13",
    description: "This is task 13",
  },
  {
    assignedTo: "Steve",
     status: "assigned"
,
    name: "Task 14",
    description: "This is task 14",
  },
  {
    assignedTo: "Bill",
     status: "assigned"
,
    name: "Task 15",
    description: "This is task 15",
  },
  {
    assignedTo: "Steve",
     status: "assigned"
,
    name: "Task 16",
    description: "This is task 16",
  },
  {
    assignedTo: "Steve",
     status: "assigned"
,
    name: "Task 17",
    description: "This is task 17",
  },
  {
    assignedTo: "Krrithik",
     status: "assigned"
,
    name: "Task 18",
    description: "This is task 18",
  },
  {
    assignedTo: "Krrithik",
     status: "assigned"
,
    name: "Task 19",
    description: "This is task 19",
  },
  {
    assignedTo: "Bill",
     status: "assigned"
,
    name: "Task 20",
    description: "This is task 20",
  },
];



function changeUser() {
  let name = document.getElementById("user").value;
  localStorage.setItem("currentUser", name);
  document.getElementById("currentUser").innerHTML = name;
 displayTasks(name);
 displayUserWithLabel(name);

}

function displayUser() {
  let name = localStorage.getItem("currentUser");
  let userDropDown = document.getElementById("user");
  userDropDown.value = name;
 displayTasks(name);
 displayUserWithLabel(name);
 
}

function displayUserWithLabel(name){
    let label = '';
    if (name == "Krrithik") {
      label = `Logged in as ${name}. Role: Admin`;
    } else {
      label = `Logged in as ${name}. Role: Standard User`;
  
    }
    document.getElementById("currentUser").innerHTML = label;
}

displayUser();
