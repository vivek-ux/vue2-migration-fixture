'use client';

import { useEffect, useState } from 'react';
export default function WelcomeCard() {
  const [name] = useState<string>('Developer');
  const [active, setActive] = useState<boolean>(false);
  function activate() {
    setActive(true);
  }
  useEffect(() => {
    document.title = name;
  }, [name]);
  return (
    <section className="p-[24px]">
      <h2>Hello, {name}</h2>
      <p className={active ? 'font-bold' : undefined}>
        Migration test is ready.
      </p>
      <button onClick={activate}>Highlight</button>
    </section>
  );
}
