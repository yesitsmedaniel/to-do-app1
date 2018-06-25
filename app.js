function onReady() {
  let id = 0;
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    let newToDoText = document.getElementById('newToDoText');
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
    //  deleteButton.addEventListener('click', function())
    });

    }                 //keep him here to close Render the Ui func
  /* deleteButton.addEventListener('click', function (){
     deleteToDo(toDo);
   });*/

    function deleteToDo(id) {
      return toDos.filter(toDo => toDo.id !== id);
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
