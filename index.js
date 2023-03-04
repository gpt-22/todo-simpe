const formElement = document.getElementsByTagName('form')[0]
const todoListElement = document.getElementsByClassName('todo-list')[0]
const addTodoButtonElement = document.querySelector('button[type=submit]')

const todos = [
  {
    id: 1,
    text: 'asldkfjalsdf',
    done: true,
  },
  {
    id: 2,
    text: '12',
    done: false,
  },
  {
    id: 3,
    text: '3244',
    done: false,
  },
  {
    id: 4,
    text: '234',
    done: true,
  },
]

console.log(addTodoButtonElement)

formElement.addEventListener('submit', (event) => {
  event.preventDefault()
})

addTodoButtonElement.addEventListener('click', addTodo)

function getTodoHTML(todo) {
  return `      
    <li id="${todo.id}">
      <span>${todo.text}</span>
      <input type="checkbox" ${todo.done ? 'checked' : ''}>
      <button>изменить</button>
      <button>удалить</button>
    </li>
  `
}

function addTodo() {
  const formDate = new FormData(formElement)
  const text = formDate.get('todo-input')

  todoListElement.innerHTML += `<li>${text}</li>`

  console.log('addddd', text)
}

function renderTodos() {
  const todosHTML = todos.map((todo) => getTodoHTML(todo)).join('')

  todoListElement.innerHTML = todosHTML
}

renderTodos()
