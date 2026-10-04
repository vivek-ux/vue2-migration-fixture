'use client';

import { useState } from 'react';
export default function StatusBanner() {
  const [online, setOnline] = useState<boolean>(true);
  function toggle() {
    setOnline((previous) => !previous);
  }
  return (
    <aside className="p-[24px]">
      {online ? (
        <strong>Service online</strong>
      ) : (
        <strong>Service offline</strong>
      )}
      <button onClick={toggle}>Toggle status</button>
    </aside>
  );
}
