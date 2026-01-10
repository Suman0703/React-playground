import { useEffect, useState } from "react"

function DarkModeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  return (
    <button
      onClick={() => setDark(prev => !prev)}
      className="border  h-10 w-10 rounded-full  text-black border-black"
    >
      {dark ? <i className="fa-solid fa-moon text-xl"></i>: <i className="fa-solid fa-sun text-xl"></i>}
    </button>
  )
}

export default DarkModeToggle
