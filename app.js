function onReady() {
  let id = 0;
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id,
      id: ++id
    });
    newToDoText.value = '';

    renderTheUI();
  }
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';
    let deleteButton = document.createElement('button');
    let deleteButText = document.createTextNode("X");

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
      deleteButton.appendChild(deleteButText);

      //should the deleteButton event listener be OUTside this function?
      //deleteButton.addEventListener('click', function())

      //not sure how to write the filter()array method
    });

  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
