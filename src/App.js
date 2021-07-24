import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('Hello, there!');

  useEffect(() => {
    (async function() {
      const { text } = await (await fetch('/api/message?name=Scott')).json();
      setData(text);
    })()
  }, [])

  return <div>{data}</div>;
}

export default App;
