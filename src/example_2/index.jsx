import { useRef, useState } from 'react';
import TodoList from './TodoList';
import useTodoList from './useTodoList';

function TodoView() {
  const inputEl = useRef(null);
  const [todoList, addTodo, deleteToDo] = useTodoList([], inputEl);
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <span>Counter : {count}</span>
        <button onClick={() => setCount(count + 1)}>Add Counter</button>
        <div style={{ height: '24px' }}>
          ------------------------------------
        </div>
        <form className='input-container' onSubmit={addTodo}>
          <input ref={inputEl} placeholder='Type your to Do' />
          <button className='add-button'>Create</button>
        </form>
        <TodoList todoList={todoList} deleteToDo={deleteToDo} />
      </header>
    </div>
  );
}

export default TodoView;
