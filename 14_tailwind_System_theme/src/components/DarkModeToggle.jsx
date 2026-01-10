import { useEffect, useState } from "react"

function DarkModeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setDark(prefersDark)
  }, [])

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(prev => !prev)}
      className="border h-10 w-10 rounded-full text-black dark:text-white border-black dark:border-white"
    >
      {dark ? (
        <i className="fa-solid fa-moon text-xl"></i>
      ) : (
        <i className="fa-solid fa-sun text-xl"></i>
      )}
    </button>
  )
}

export default DarkModeToggle



