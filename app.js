
// selectors

var inputBar =  document.getElementsByClassName('input-bar')[0];
var addButton =  document.getElementsByClassName('add-button')[0];
var tasksContainer =  document.getElementsByClassName('tasks-container')[0];

// functions

// function for adding todo list
function addToList(){
    var item = document.createElement("div");
    item.innerHTML = inputBar.value;
    item.classList.add('list-item');
    tasksContainer.appendChild(item);
    inputBar.value = "";

    // for deleting the list
    item.addEventListener('click', function(){
        this.remove();
    });
}

// event listeners

// clicking on the add button
addButton.addEventListener('click',addToList);