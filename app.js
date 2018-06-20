function onReady() {
 let id = 0;
 const toDos = [];
 const addToDoForm = document.getElementById('addToDoForm');
    function createNewToDo() {
const newToDoText = document.getElementById('newToDoText');
         if (!newToDoText.value) { return; }
        toDos.push({
      title: newToDoText.value,
      complete: false
      //id: id
      //id: ++id
      //increment the ID variable? like... ID= ID + 1?
    });
        newToDoText.value = '';
        renderTheUI();
  }
     addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
     renderTheUI();

    function renderTheUI() {

        const toDoList = document.getElementById('toDoList');
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<span> - </span>';
        toDoList.textContent = '';
        toDos.forEach(function(toDo) {
              const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
            newLi.textContent = toDo.title;
              toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

    });


  }
}

window.onload = function() {
  onReady();
};
