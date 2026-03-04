import { useState, useEffect, useCallback } from "react"

function EffectAndCallback() {

  const [count, setCount] = useState(0)

  const logCount = useCallback(() => {
    console.log("Current count:", count)
  }, [count])

  useEffect(() => {
    logCount()
  }, [logCount])

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  )
}

export default EffectAndCallback
