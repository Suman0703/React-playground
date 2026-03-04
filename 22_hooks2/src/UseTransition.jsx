import { useState, useTransition } from "react";

function Transition() {
    const [pending, startTransition] = useTransition();

    const handleButton = () => {

        startTransition(async () => {
            await new Promise(res => setTimeout(res, 2000));
        });

    };

    return (
        <div>
            <h1>useTransition Hook in React js 19</h1>
            <button disabled={pending} onClick={handleButton}>
                Click
            </button>
        </div>
    );
}


export default Transition