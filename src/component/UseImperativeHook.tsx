import { useRef } from "react";
import Counter, { CounterRef } from "./Counter";

interface ImperativeProps {}

/**
 * This allows us to call a child method from a parent component
 */
function Imperative(props: ImperativeProps) {
    const counterRef = useRef<CounterRef>(null);
    return (
        <div>
            <Counter ref={counterRef}/>
            <button onClick={() => counterRef.current?.reset()}>Reset From Parent</button>
            <button onClick={() => counterRef.current?.checkSubscribed(true)}>Reset From Parent</button>
        </div>)
}

export default Imperative;