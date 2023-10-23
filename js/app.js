const titleInput = document.querySelector('#Title');
const textInput = document.querySelector('#Text');
const buttonAdd = document.querySelector('.btn');
const listItem = document.querySelector('.list');
const form = document.querySelector('.create');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    addTask();
});

function addTask() {
    const title = titleInput.value;
    const text = textInput.value;

    if (title === "" || text === "") {
        alert("Please fill the Title and the Text.");
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <strong>${titleInput.value}</strong>
        <p>${textInput.value}</p>
        <button type="button" class="btn btn2 btn-outline-danger">Delete</button>
    `;

    listItem.appendChild(taskItem);

    titleInput.value = "";
    textInput.value = "";
   
    const deleteButton = taskItem.querySelector('.btn');
    deleteButton.addEventListener('click', function() {
        listItem.removeChild(taskItem);
    });
}






