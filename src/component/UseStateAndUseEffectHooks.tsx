import { useEffect, useState } from "react";

interface DemoProps {}

export default function Demo({}: DemoProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // code to run
        console.log('The count is now: ', count)

        // optional return (cleanUp) function
        return () => {
            console.log("I'm being cleaned UP!")
        }
    }, [count]) // dependency array

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}