'use client';

import { useState } from 'react';
type Task = {
  id: number;
  label: string;
};
export default function TaskList() {
  const [title] = useState<string>('Tasks');
  const [tasks] = useState<Task[]>([
    {
      id: 1,
      label: 'Review Vue components',
    },
    {
      id: 2,
      label: 'Inspect generated TSX',
    },
  ]);
  return (
    <section className="p-[24px]">
      <h2>{title}</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.label}</li>
        ))}
      </ul>
    </section>
  );
}
