import { memo } from "react";

interface SearchProps {
    onChange: (text: string) => void;
}

function Search({ onChange }: SearchProps) {
    console.log("...Search rendered.")
    return (
        <input type="text" placeholder="Search users..." onChange={e => onChange(e.target.value)} />
    )
}

// Wrapping with memo will cause this component not to be rendered if the props are unchanged
export default memo(Search);