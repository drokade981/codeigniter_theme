import React, {useState} from 'react';
import MemoCheck from './MemoCheck';

function Home() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(10);

  return (
    <div>Home Memo {count}
        <MemoCheck data={data}/>
        <button onClick={() => setCount(count + 1)}>Count</button>
        <button onClick={() => setData(data + 1)}>Data</button>
    </div>
  )
}

export  {Home as Home2}