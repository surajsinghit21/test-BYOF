import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`api/HttpTrigger2?code=mRyVsnN67FfoDDOZ1nwlIUENTWHoWjQNJoX0Vv1hYvRMAzFuAt3DrQ==&clientId=default`)).json();
      setData(text);
    })();
  });

  return <div>{data}</div>;
}

export default App;
