import { useEffect, useRef, useState } from "react";

interface UseRefProps {}

export default function UseRef({}: UseRefProps) {
    const [count, setCount] = useState(0);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    
    // Similar to  useState but does not trigger a component re-rendering and their values are not used in the tsx return body.
    const countRef = useRef(0);

    const handleIncrement = () => {
        setCount(count + 1);
        countRef.current++;

        console.log('State: ', count); // initial value = 0 because the component has not rendered
        console.log('Ref: ', countRef.current); // initial value = 1 because rendering is not needed 
    };

    return (
        <div className="tutorial">
            Count: {count}
            {/* Count: {countRef.current} //this will not render until something triggers a component rendering like 'setCount(count + 1)' */}
            <button onClick={handleIncrement}>Increment</button>
            <div className="tutorial">
                <input ref={inputRef} type="text" placeholder="Type something..." />
            </div>
        </div>
    )
}