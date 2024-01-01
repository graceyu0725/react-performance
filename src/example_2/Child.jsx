// import { memo } from 'react';
let childeCount = 0;

function Child(props) {
  const { number, sayHello } = props;
  sayHello();

  childeCount = childeCount + 1;

  return (
    <div className='list'>
      <div style={{ height: '24px', marginTop: '-12px', marginBottom: '12px' }}>
        --------------------
      </div>
      <div>Child render: {childeCount}</div>
      <div>number: {number}</div>
    </div>
  );
}

export default Child;
// export default memo(Child);

// 如何減少 re-render?
// 1. 用 memo 包住 Child
// 2. sayHello 這個 function 用 useCallback 包住
