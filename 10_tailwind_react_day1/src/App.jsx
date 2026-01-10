import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800">
        <h1 className="text-xl font-bold tracking-wide">
          Code<span className="text-gray-400">Lab</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Courses</li>
          <li className="hover:text-white cursor-pointer">Projects</li>
          <li className="hover:text-white cursor-pointer">Roadmap</li>
        </ul>

        <button className="border border-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition">
          Login
        </button>
      </nav>

      <main className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row items-center gap-16">

          {/* adding comments */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Build Real  
              <br />
              <span className="text-gray-400">Coding Skills</span>
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Learn React, Tailwind, and modern web development by building
              real-world projects — clean code, real logic, real confidence.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                Start Learning
              </button>

              <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                View Projects
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 relative hidden lg:block">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl">

              <p className="text-sm text-gray-400 mb-3">
                example.js
              </p>

              <pre className="text-sm text-gray-200 leading-relaxed">
{`function learn() {
  return "Practice > Theory";
}

export default learn;`}
              </pre>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold">
              🚀 Real Projects
            </div>
          </div>

        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-800 px-8 py-6 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2025 CodeLab. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span className="hover:text-white cursor-pointer">Contact</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;


