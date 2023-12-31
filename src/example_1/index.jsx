import { useState } from 'react';
import '../App.css';
import Tab from './Tab';
import Topic from './Topic';
let count = 0;

function TabAndTopic() {
  const tabContent = ['A', 'B', 'C', 'D'];
  const [selectedId, setSelectedId] = useState(0);
  count = count + 1;

  return (
    <div className='example-1-header'>
      <div>Parent render: {count}</div>
      <div>-----------------------------</div>
      <Topic />
      <div style={{ display: 'flex', gap: '5px' }}>
        {tabContent.map((content, i) => (
          <Tab
            key={content}
            content={content}
            onClick={() => setSelectedId(i)}
            style={
              i === selectedId ? { color: 'white', background: 'grey' } : {}
            }
          />
        ))}
      </div>
    </div>
  );
}

export default TabAndTopic;
