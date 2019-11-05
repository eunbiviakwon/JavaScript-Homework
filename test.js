const person = [
  {id:1, name: '성진'},
  {id:2, name: '현진'},
  {id:3, name: '홍빈'},
  {id:4, name: '은비'},
  {id:5, name: '민지'}
];
//배열의 요소를 참조하기 위해 사용.
const a = person.filter((item, index) => {
  return item.id < 5 && (index !== 2);
})

console.log(a);

const todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

const remove = todos.filter(item => {
  return item.content !== 'CSS'
})

console.log(remove);