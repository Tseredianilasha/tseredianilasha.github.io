import React, { useState } from 'react';
import './App.css';
import { NavBarItem, Navbar } from './components/navbar';
import { Content } from './components/content';

function App() {
  const [active, setActive] = useState<NavBarItem>('Character');
  return (
    <>
      <Navbar onActiveChange={setActive} />
      {/* <Content activeItem={active} /> */}
    </>
  );
}

export default App;
