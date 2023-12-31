import { useState } from 'react';
// import { useCallback } from 'react';

function useTodoList(value, inputEl) {
  const [todoList, setTodoList] = useState(value);

  // =======================================
  // 使用 useCallback 前
  // =======================================
  const addTodo = (event) => {
    event.preventDefault();
    if (!inputEl.current.value) {
      return;
    }
    const mergeArr = [...todoList, inputEl.current.value];
    inputEl.current.value = '';
    return setTodoList(mergeArr);
  };

  const deleteToDo = (index) => {
    const newArr = [...todoList];
    newArr.splice(index, 1);
    return setTodoList(newArr);
  };
  // =======================================

  // // =======================================
  // // 使用 useCallback 後
  // // =======================================
  // const addTodo = useCallback(
  //   (event) => {
  //     event.preventDefault();
  //     if (!inputEl.current.value) {
  //       return;
  //     }
  //     const mergeArr = [...todoList, inputEl.current.value];
  //     inputEl.current.value = '';
  //     return setTodoList(mergeArr);
  //   },
  //   [todoList, inputEl],
  // );

  // const deleteToDo = useCallback(
  //   (index) => {
  //     const newArr = [...todoList];
  //     newArr.splice(index, 1);
  //     return setTodoList(newArr);
  //   },
  //   [todoList],
  // );
  // // =======================================

  return [todoList, addTodo, deleteToDo];
}

export default useTodoList;
