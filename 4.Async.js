// DOMs
const $todos = document.querySelector('.todos');
const render = data => {
  console.log('RENDER');
  // todos = data;
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


const getTodos = async() => {
  try {
    const res = axios.get('/todos')
    todos = res.data;
    render()
  } catch (error) {

  }

const generatedId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id))+ 1 : 1;
};

window.onload = getTodos;

$input.onkeyup = async({target, keyCode}) => {
  const content = target.value.trim();
  if(!content || keyCode !== 13) return;
  target.value = '';
  // const newTodo = {id: generateId(), content, completed: false};
 try {
  const res = await axios.post('/todos',{id: generateId(), content, completed: false}) // 비동기 함수는 리턴이 안된다. undefined. 비동기 함수는 콜백함수를 써야 한다. 순서에 무관함.
  todos = res.data;
  render()
} catch (error) {

}

$todos.onchange = async({target}) => {
  // id / completed
  const id = target.parentNode.id;
  const completed = !todos.find(todo => todo.id === + id).completed;

  try{
  const res = await axios.patch(`/todos/${id}`,{completed}) // 비동기 함수는 리턴이 안된다. undefined. 비동기 함수는 콜백함수를 써야 한다. 순서에 무관함.
  todos = res.data;
  render()
} catch (error) {

}
});

$todos.onclick = async({target}) => {
  if (target.classList.contains('remove-todo')) return;

  try{
    const res = await axios.patch(`/todos/${id}`) // 비동기 함수는 리턴이 안된다. undefined. 비동기 함수는 콜백함수를 써야 한다. 순서에 무관함.
    todos = res.data;
    render()
  } catch (error) {

  }
