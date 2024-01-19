import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const Todo = (props) => {
  const [todos, setTodos] = useContext(TodoContext);

  function changeHandlerCompleteTodo(e) {
    const filteredTodos = todos.map((todo) => {
      if (todo.id === e.target.value) {
        todo.completed = false;

        if (e.target.checked) {
          todo.completed = true;
        }
      }
      return todo;
    });

    setTodos(filteredTodos);
  }

  function clickHandlerDeleteTodo(e) {
    e.preventDefault();
    const filteredTodo = todos.filter((todo) => {
      return todo.id !== e.target.id;
    });

    setTodos(filteredTodo);
  }

  const isCompleted = props.completed ? 'checked' : '';

  return (
    <section className="todo-item">
      <section>
        <input
          id={props.id}
          type="checkbox"
          checked={isCompleted}
          value={props.id}
          onChange={changeHandlerCompleteTodo}
        />
        <label htmlFor={props.id}>{props.title}</label>
      </section>

      <button
        className="btn-delete"
        type="button"
        id={props.id}
        onClick={clickHandlerDeleteTodo}
      >
        Delete task
      </button>
    </section>
  );
};

export default Todo;
