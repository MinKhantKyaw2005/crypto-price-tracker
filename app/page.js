'use client'; // Mark this as a Client Component

import { Providers } from './providers';
import Dashboard from './dashboard'; // Your dashboard component

export default function Home() {
  return (
    <Providers>
      <Dashboard />
    </Providers>
  );
}