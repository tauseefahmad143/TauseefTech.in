const todoList = document.querySelector('.input-area');
const list = document.querySelector('.list');
const pendingNum = document.querySelector('.replace');
const clearBtn = document.querySelector('.btn');

// Call this function to update tasks count
allTasks();

// Function to update tasks count
function allTasks() {
    let tasks = document.querySelectorAll('.task');
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;
}

// Event listener for adding tasks
todoList.addEventListener('keypress', function (event) {
    if (event.key === "Enter" && todoList.value.trim().length > 0) {
        let inputValue = todoList.value.trim();
        let listItem = `<li class="items-list task" onclick="handleCheck(this)">
                            <input type="checkbox" class="checkbox">
                            <label class="label">${inputValue}</label>
                            <i class="fa-solid fa-trash icon deleteBtn"></i>
                        </li>`;
        list.insertAdjacentHTML('beforeend', listItem);
        todoList.value = "";
        allTasks();
    }
});

list.addEventListener('click', function (e) {
    if (e.target.matches('.task')) {
        const listItem = e.target; // Get the clicked task item
        const checkbox = listItem.querySelector(".checkbox"); // Get the checkbox within the clicked task item
        const isChecked = checkbox.checked; // Get the current state of the checkbox
        checkbox.checked = !isChecked; // Toggle the checkbox

        // Toggle the 'completed' class on the task item based on the checkbox state
        listItem.classList.toggle('completed');
    }
});

list.addEventListener('click', function (e) {
    if (e.target.matches('.checkbox')) {
        const checkbox = e.target; // Get the clicked checkbox
        const listItem = checkbox.closest('.task'); // Get the parent task item

        // Toggle the 'completed' class on the task item based on the checkbox state
        listItem.classList.toggle('.task', checkbox.checked);
    }
});

function handleCheck(e){
    const checkbox = e.querySelector('input'); //getting checkbox
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle('task');
    allTasks();
}

// Event delegation for handling delete button click
list.addEventListener('click', function (event) {
    if (event.target.matches('.deleteBtn')) {
        const listItem = event.target.closest('.items-list');
        listItem.remove();
        allTasks();
    }
});

// Event listener for clearing all tasks
clearBtn.addEventListener('click', function () {
    list.innerHTML = "";
    allTasks();
});