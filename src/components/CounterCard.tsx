'use client';

import { useState } from 'react';
export default function CounterCard() {
  const [title] = useState<string>('Counter');
  const [count, setCount] = useState<number>(0);
  function increment() {
    setCount((previousCount) => previousCount + 1);
  }
  return (
    <section className="p-[24px]">
      <h2>{title}</h2>
      {count > 0 ? <p>Clicks: {count}</p> : <p>No clicks yet</p>}
      <button onClick={increment}>Add click</button>
    </section>
  );
}
