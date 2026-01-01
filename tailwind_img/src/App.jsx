import { useState } from 'react'
import image from "./assets/image.png"
import './App.css'

function App() {

  return (
    <div className="w-72 rounded-lg overflow-hidden shadow-lg m-2 p-2 flex flex-col items-center">
      <img
        src={image}
        alt="card"
        className="w-52 h-52 object-cover object-top  rounded-full border-2 border-gray-300 shadow-lg hover:scale-105 transition-transform duration-300"
      />

      <div className="p-4 flex flex-col text-center">
        <h2 className="text-lg font-semibold mb-2">
          Beautiful View
        </h2>
        <p className="text-sm text-gray-600">
          This is a simple image card created using Tailwind CSS.
        </p>
      </div>

      <div className="[perspective:10px]">
        <div className="hover:rotate-y-12 transition-transform duration-500">
          Card
        </div>
      </div>
 

       <div
      className="
        h-40 w-full
        rounded-xl
        bg-dotted
        border
        p-4
      "
    >

    </div>
    <h3 className="text-sm font-medium">
        Single box with dotted background
      </h3>


    </div >
  );
}

export default App
