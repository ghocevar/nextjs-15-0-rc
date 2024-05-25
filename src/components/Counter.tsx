'use client';

import { useState } from 'react';

const Text = () => {
  console.log('Text component rendered');

  return <p>This is a counter component.</p>;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log('Counter component rendered');

  return (
    <>
      <Text />
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
    </>
  );
};

export default Counter;
