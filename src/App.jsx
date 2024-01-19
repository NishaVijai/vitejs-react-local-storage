import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

import { TodoProvider } from './context/TodoContext';

import './App.css';

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <h1 className="app-title">React to do App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
