function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: ++id
    });
  }

  function deleteToDo(id) {
    return toDos.filter(toDo => toDo.id !== id);
  }
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';



    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.checked = toDo.complete;

      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = '<span>Exterminate</span>';

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

      deleteButton.addEventListener('click', () => {
        toDos = deleteToDo(toDo.id);
        renderTheUI();
      });
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
    renderTheUI();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
