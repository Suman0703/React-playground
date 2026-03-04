import { useState } from "react"

function SimpleLogin() {

    const [name, setName] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // If user is NOT logged in
    if (!isLoggedIn) {
        return (
            <div className="box">
                <h2>Please Login</h2>

                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <button onClick={() => setIsLoggedIn(true)}>
                    Login
                </button>
            </div>
        )
    }

    // If user IS logged in
    return (
        <div className="box">
            <h2>Welcome {name} 😊</h2>

            <button onClick={() => setIsLoggedIn(false)}>
                Logout
            </button>
        </div>
    )
}

export default SimpleLogin
