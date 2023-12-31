import { memo } from 'react';
let count = 0;

function TodoList(props) {
  const { todoList, deleteToDo } = props;
  count = count + 1;

  return (
    <div className='list'>
      TodoList render Times {count}
      {todoList.map((value, index) => (
        <li className='list-item' key={`to_${index}`}>
          <div>
            {index + 1}. {value}
          </div>
          <span onClick={() => deleteToDo(index)}>-</span>
        </li>
      ))}
    </div>
  );
}

// export default TodoList;
export default memo(TodoList);
