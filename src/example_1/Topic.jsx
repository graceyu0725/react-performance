// import { memo } from 'react';
let count = 0;

function Topic() {
  console.log('Topic render');
  count = count + 1;
  return (
    <>
      <h2>React Performance</h2>
      <span style={{ marginTop: '-12px', marginBottom: '12px' }}>
        Topic render: {count}
      </span>
      <div style={{ marginBottom: '24px' }}>-----------------------------</div>
    </>
  );
}

export default Topic;
// export default memo(Topic);
