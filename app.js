function onReady () {
  const addToDoForm = document.getElementById ('addToDoForm');
  const newToDoText = document.getElementById ('newToDoText');
  const toDoList = document.getElementById ('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<span> X </span>';

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';

    // attach delete button to list item
    newLi.appendChild(deleteButton);


  });
}

window.onload = function() {
  onReady ();
};
