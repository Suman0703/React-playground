import { useEffect } from "react";

const Counter = ({ data }) => {

    function handleData() {
        console.log("handleData function called");
    }

    function handleCounter() {
        console.log("handleCounter function called");
    }

    // Runs only when `data` changes
    useEffect(() => {
        handleData();
    }, [data]);

    // Runs only once (on mount)
    useEffect(() => {
        handleCounter();
    }, []);

    return (
        <div>
            <h1>Counter Component</h1>
        </div>
    );
};

export default Counter;
