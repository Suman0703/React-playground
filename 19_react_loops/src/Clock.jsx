import { useEffect, useState } from "react";

function Clock({ color }) {
    const [time, setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={{
                backgroundColor: "#f5f5f5",
            }}
        >
            <div
                style={{
                    backgroundColor: "black",
                    color: color,          // ✅ use prop here
                    padding: "30px 50px",
                    borderRadius: "20px",
                    fontSize: "48px",
                    fontWeight: "bold",
                    letterSpacing: "3px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
                }}
            >
                {time}
            </div>
        </div>
    );
}

export default Clock;
