import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
//@ts-expect-error - I got you
import { Button } from 'ui/button';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Button>Button</Button>
          <Link to="/remote">Remote</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
