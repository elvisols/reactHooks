import { useCallback, useState } from "react"
import Search from "./Search";
import { shuffle } from "../util/utils";

interface DemoProps {}

export default function DemoCallback({}: DemoProps) {
    const allUsers =[
        "james",
        "john",
        "simon",
        "george",
        "alex"
    ]

    const [users, setUsers] = useState(allUsers);

    /**
     * handleSearch is always called on remount because on each remount (e.g when we hit the shuffle button), 
     * function values are changed and Search component is re-rendered even when its wrapped with 'memo'
     */ 
    // const handleSearch = (text: string) => {
    //     const filterUsers = allUsers.filter(user => 
    //         user.includes(text),
    //     );
    //     setUsers(filterUsers);
    // };

    // To avoid the issue above, wrap the function using useCallback hook as below to return a singular copy of the function
    const handleSearch = useCallback((text: string) => {
        console.log(users[0]) // note that this will always return the first element before the method was froozen. Except we add dependencies.

        const filterUsers = allUsers.filter(user => 
            user.includes(text),
        );
        setUsers(filterUsers);
    }, [users]);  // note don't freeze your function forever, use some dependencies to know to things are to change.

    return (
        <div>
            <div className="align-center mb-2 flex">
                <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>

                <Search onChange={handleSearch} />
            </div>
            <ul>
                {users.map(user => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    );
}