import { forwardRef, Ref, useImperativeHandle, useRef, useState } from "react";

interface CounterProps {}

export type CounterRef = {
    reset: () => void;
    checkSubscribed: (value: boolean) => void;
}

function Counter(props: CounterProps, ref: Ref<CounterRef>) {
    const [count, setCount] = useState(0);
    const localRef = useRef<HTMLInputElement>(null);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    // we want to expose this to this parent
    const reset = () => {
        setCount(0);
    }

    useImperativeHandle(ref, () => ({ 
        // reset: () => {
        //     if(!localRef.current) return;

        //     localRef.current.value = '';
        //     localRef.current?.focus();
        // },
        reset,
        checkSubscribed: (value) => console.log(value)
    }))

    return (
        <div>
            <h1 className="text-2xl">Count: {count}</h1>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
            {/* using local ref */}
            <input type="text" ref={localRef} />
        </div>)
}

// we use the forwardRef to expose some functions to the calling parents
export default forwardRef(Counter)