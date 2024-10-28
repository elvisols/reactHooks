import { useTransition } from "react";
import { Tab } from "./UseTransitionHook";

interface TabButtonProps {
    title: string;
    onClick: () => void;
    variant: string
}

const TabButton = ({ onClick, ...props}: TabButtonProps) => {
    const [isPending, startTransition] = useTransition(); 

    // method 2: calling transition from the inner component
    const handleClick = () => {
        startTransition(() => {
            onClick?.();
        })
    }
    
    if(isPending) {
        return <p><i>post is loading...</i></p>
    }
    return <button title={ props.title } onClick={handleClick}>{ props.title }</button>
}

export default TabButton;