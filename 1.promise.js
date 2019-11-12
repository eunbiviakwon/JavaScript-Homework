// DOMs
const $todos = document.querySelector('.todos');
const render = data => {
  console.log('RENDER');
  todos = data;
  console.log([data])
  let html = '';
  todos.forEach(({ id, content, completed }) => {
    html += `
      <li id="${id}" class="todo-item">
        <input class="checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
        <label for="ck-${id}">${content}</label>
        <button class="remove-todo">X</button>
      </li>`;
  });
  $todos.innerHTML = html;
};
const get = (url) => {
   return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url); //GET, POST 등은 대문자로 써준다. (관례)
    xhr.send(); // json string으로 날려준다.
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(xhr.status));
      }
    };
  });
};

const post = ((url, payload) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url); //GET, POST 등은 대문자로 써준다. (관례)
    xhr.setRequestHeader({'content-type': 'application/json'})
    xhr.send(JSON.stringify(payload)); // json string으로 날려준다.
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) { // 어떤 서버는 201을 던지는 경우도 있다.
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(xhr.status));
      }
    };
  });
});

const patch = (url, payload) => {
  const xhr = new XMLHttpRequest();
  xhr.open('PATCH', url); //GET, POST 등은 대문자로 써준다. (관례)
  xhr.setRequestHeader({'content-type': 'application/json'})
  xhr.send(JSON.stringify(payload)); // json string으로 날려준다.
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) { // 어떤 서버는 201을 던지는 경우도 있다.
      resolve(JSON.parse(xhr.response));
    } else {
      reject(new Error(xhr.status));
    }
  };
};
const del = (url) => {
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', url); //GET, POST 등은 대문자로 써준다. (관례)
  xhr.setRequestHeader({'content-type': 'application/json'})
  xhr.send(); // json string으로 날려준다.
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) { // 어떤 서버는 201을 던지는 경우도 있다.
      resolve(JSON.parse(xhr.response));
    } else {
      reject(new Error(xhr.status));
    }
  };
};

const getTodos = () => {
  get('/todos') // 비동기 함수는 리턴이 안된다. undefined. 비동기 함수는 콜백함수를 써야 한다. 순서에 무관함.
    .then(render);
  // 콜백헬
};

const generatedId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id))+ 1 : 1;
};

window.onload = getTodos;

$input.onkeyup = ({target, keyCode}) => {
  const content = target.value.trim();
  if(!content || keyCode !== 13) return;
  target.value = '';
  // const newTodo = {id: generateId(), content, completed: false};
  post('/todos', {id: generateId(), content, completed: false}
    .then(render);
};
$todos.onchange = ({target}) => {
  // id / completed
  const id = target.parentNode.id;
  const completed = !todos.find(todo => todo.id === + id).completed;
  patch(`/todos/${id}`, {completed})
    .then(render);
};
$todos.onclick = ({target}) => {
  if (target.classList.contains('remove-todo')) return;
  const id = target.parentNode.id;
  DLE(`/todos/${id}`)
   .then(render);

};

