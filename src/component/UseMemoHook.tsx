import { useMemo, useState } from "react";
import { initialItems } from "../util/utils";

interface DemoProps { }

function Demo({ }: DemoProps) {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    /**
     * The code below can introduce a performance issue because it will always be computed on each mount even when items isn't changed.
     * E.g when we repeated Increment count. items will need to recompute to get the final element(isSelected)
     */
    // const selectedItem = items.find(item => item.isSelected);

    // Using useMemo we store the initial selectedItem computed and ONLY recompute when items changes
    const selectedItem = useMemo(
        () => items.find(item => item.isSelected), 
        [items]
    );


    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Selected Item: {selectedItem?.id}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Demo;