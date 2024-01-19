import { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import { nanoid } from 'nanoid';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useContext(TodoContext);

  function handleChange(e) {
    console.log('title: ', title);
    setTitle(e.target.value);
  }

  function clickHandlerAddTodo(e) {
    e.preventDefault();
    if (title === '' || title === undefined) {
      alert('Input field can not be blank');
      return;
    }

    const newTodos = [
      ...todos,
      { id: `todo-${nanoid()}`, title: title, completed: false },
    ];
    setTodos(newTodos);
    setTitle('');
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="form-input-container">
      <input
        className="form-input"
        type="text"
        value={title}
        placeholder="Enter a task..."
        onChange={handleChange}
      />
      <button className="form-btn" type="button" onClick={clickHandlerAddTodo}>
        Add task
      </button>
    </div>
  );
};

export default AddTodo;
