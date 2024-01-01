import { useState } from 'react';
// import { useCallback } from 'react';
// import { useMemo } from 'react';
import Child from './Child';

let parentCount = 0;

// // 3. 使用 useMemo
// const expensiveFunction = (number) => {
//   for (let i = 0; i < 1000000000; i++) {}
//   return number * 10;
// };

function Greeting() {
  const [inputValue, setInputValue] = useState('');
  const [number, setNumber] = useState(0);

  parentCount = parentCount + 1;

  // 2. 使用 useCallback 前
  const sayHello = () => {
    console.log(`Hello! My number is ${number}`);
  };

  // // 2. 使用 useCallback 後
  // // 當 number 值有改變時，才重新產生這個 function
  // const sayHello = useCallback(() => {
  //   console.log(`Hello! My number is ${number}`);
  // }, [number]);

  // 3. 使用 useMemo 前
  // const expensiveValue = expensiveFunction(number);

  // // // 3. 使用 useMemo 後
  // const expensiveValue = useMemo(() => expensiveFunction(number), [number]);

  return (
    <div className='App'>
      <header className='App-header'>
        <div>Parent render: {parentCount}</div>
        <div style={{ height: '24px', marginBottom: '12px' }}>
          --------------------
        </div>
        <input
          style={{ height: '40px' }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Say something'
        />
        <div style={{ height: '40px' }}>{inputValue}</div>

        <button
          className='add-button'
          onClick={() => setNumber((prev) => prev + 1)}
        >
          Add 1
        </button>

        {/* 3. 使用 useMemo */}
        {/* <div>Expensive Vale: {expensiveValue}</div> */}

        <Child number={number} sayHello={sayHello} />
      </header>
    </div>
  );
}

export default Greeting;
