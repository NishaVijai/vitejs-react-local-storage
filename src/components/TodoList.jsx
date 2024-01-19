import Todo from './Todo';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
  const [todos, setTodos] = useContext(TodoContext);

  return (
    <>
      {todos.length >= 1 ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))
      ) : (
        <h3>No tasks</h3>
      )}
    </>
  );
};

export default TodoList;
