
const $input = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');



  let html = `<li id="id" )}>
        <input type="checkbox" class="ckbx" ${todos.completed ? 'checked' : ''}>
        <span>${todos.content}</span>
        <button class="remove">X</button>
      </li>`

  $todos.innerHTML = html;

  function getTodos() {

    todos = [

      {
        id: 1,
        content: 'HTML',
        completed: false
      },
      {
        id: 2,
        content: 'CSS',
        completed: true
      }, {
        id: 3,
        content: 'Javascript',
        completed: false
      }
    ];
    render();
  }

