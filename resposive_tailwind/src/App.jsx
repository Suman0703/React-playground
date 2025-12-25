import { useState } from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='min-h-screen flex flex-col gap-20 bg-slate-950'>
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;

