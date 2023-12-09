const dummyTasks = [
  {
    assignedTo: "Steve",
    status: "complete",
    name: "Task 1 for Steve",
    description: "This is task 1",
    id: "45bd9442-9071-407b-8dee-09ca5138380b",
  },
  {
    assignedTo: "Krrithik",
    status: "in-progress",
    name: "Task 2 for Krrithik",
    description: "This is task 2",
    id: "ecaaecc7-d3a9-46fe-a7f8-57c8c8ebcde6",
  },
  {
    assignedTo: "Bill",
    status: "in-progress",
    name: "Task 3",
    description: "This is task 3",
    id: "a4662c68-4fc9-466f-9863-a01e2edfecc1",
  },
  {
    assignedTo: "Bill",
    status: "assigned",
    name: "Task 4 for Bill",
    description: "This is task 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur, voluptates, voluptatum inventore numquam nobis debitis quos eum veritatis reiciendis alias sit sed consequuntur libero exercitationem commodi, magni necessitatibus quidem?", 
    id: "435dda9d-28f4-4754-a27d-2937ca46ddf2",
  },
  {
    assignedTo: "Krrithik",
    status: "assigned",
    name: "Task 5",
    description: "This is task 5",
    id: "91f6a05b-59d5-4b42-9fee-adb70b686534",
  },
  {
    assignedTo: "Steve",
    status: "assigned",
    name: "Task 6",
    description: "This is task 6",
    id: "c92c1ea3-4ef8-4ead-9428-b63b85d8ec18",
  },
  {
    assignedTo: "Bill",
    status: "assigned",
    name: "Task 7",
    description: "This is task 7",
    id: "64bfb45e-9cd1-47ab-9bf8-c45b1f134484",
  },
  {
    assignedTo: "Bill",
    status: "assigned",
    name: "Task 8",
    description: "This is task 8",
    id: "5022b651-3b61-47f9-a5d2-cc288ef2f8a1",
  },
  {
    assignedTo: "Steve",
    status: "assigned",
    name: "Task 9",
    description: "This is task 9",
    id: "f6fadcd8-2007-4dcb-8d85-c36e63bbd727",
  },
  {
    assignedTo: "Bill",
    status: "assigned",
    name: "Task 10",
    description: "This is task 10",
    id: "52792c80-90c1-4397-8729-d4a0c63345ec",
    
  },
  {
    assignedTo: "Bill",
    status: "assigned",
    name: "Task 11",
    description: "This is task 11",
    id: "8bb39180-c818-4d9b-bd23-342ac7653745",
  },
  {
    assignedTo: "Bill",
    status: "assigned",
    name: "Task 12",
    description: "This is task 12",
    id: "1daa8975-18ff-4306-9b04-3127a36c02b0",
  },
  {
    assignedTo: "Krrithik",
    status: "complete",
    name: "Task 13",
    description: "This is task 13",
    id: "a46616c1-4777-4b26-b7bf-919e73ee6d65",
  },
  {
    assignedTo: "Steve",
    status: "assigned",
    name: "Task 14",
    description: "This is task 14",
    id: "0266aa3a-0ca4-42ae-8605-73c9b84099f5",
  },
  {
    assignedTo: "Bill",
    status: "complete",
    name: "Task 15",
    description: "This is task 15",
    id: "f90b3fb0-b1bc-49c2-9ed6-b0926cdef2b0",
  },
  {
    assignedTo: "Steve",
    status: "assigned",
    name: "Task 16",
    description: "This is task 16",
    id: "d4a6910d-9ba4-40c9-80fe-365acc3f6773",
  },
  {
    assignedTo: "Steve",
    status: "in-progress",
    name: "Task 17",
    description: "This is task 17",
    id: "",
  },
  {
    assignedTo: "Krrithik",
    status: "assigned",
    name: "Task 18",
    description: "This is task 18",
    id: "aa26ca68-5dcc-4106-b987-9edd273444da",
  },
  {
    assignedTo: "Krrithik",
    status: "assigned",
    name: "Task 19",
    description: "This is task 19",
    id: "16ccfa72-7534-462b-9004-915de8db6e0a",
  },
  {
    assignedTo: "Bill",
    status: "complete",
    name: "Task 20",
    description: "This is task 20",
    id: "a33f53b3-1cec-403e-b8d1-65065c51334b",
  },
];

function changeUser() {
  let name = document.getElementById("user").value;
  localStorage.setItem("currentUser", name);
  document.getElementById("currentUser").innerHTML = name;
  displayTasks(name);
  displayUserWithLabel(name);
  location.reload();
}

function displayUser() {
  let name = getCurrentUser();
  let userDropDown = document.getElementById("user");
  userDropDown.value = name;
  displayTasks(name);
  displayUserWithLabel(name);
}

function displayUserWithLabel(name) {
  let label = "";
  if (name == "Krrithik") {
    label = `Logged in as ${name}. Role: Admin`;
  } else {
    label = `Logged in as ${name}. Role: Standard User`;
  }
  document.getElementById("currentUser").innerHTML = label;
}

function getCurrentUser() {
  let name = localStorage.getItem("currentUser");
  return name;
}

displayUser();
