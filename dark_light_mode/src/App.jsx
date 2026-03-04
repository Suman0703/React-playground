import { useState } from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='min-h-screen flex flex-col gap-20 dark:bg-slate-950 bg-slate-100'>
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;

