import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { User, UserContext } from "./UserContextProvider";

interface Props {
    user: User;
    onUpdate: (user: User) => void;
}

// export const Person = ({user, onUpdate}: Props) => {
export const Person = (props: User) => {

    const [isShowInfo, setShowInfo] = useState<boolean>(false);
    const [personBio, setPersonBio] = useState<string | null>(null)
    // const [email, setEmail] = useState<string>(user.email)
    // const [name, setName] = useState<string>(user.name)

    const { users, updateUser, addUser, deleteUser } = useContext(UserContext);
    
    const toggleInfo = () => {
        setShowInfo(prev => !prev);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setPersonBio(event.target.value);
    }

    const handleSummit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // onUpdate({
        //     ...users,
        //     name: name,
        //     email: email
        // })
    }

    return (
        <div>
            {isShowInfo && (
                <>
                    <p>Name: {props.name}</p>
                    <p>Age: {props.age}</p>
                    <p>This person {props.isMarried ? "is married" : "is single"}</p>
                </>
            )}
            <button onClick={toggleInfo}>Toggle Info</button>
            <p />
            <p>
                {" "}
                {props.name} Bio: {!personBio ? "No Bio Available" : personBio}
            </p>
            <input onChange={handleChange} />
            <input type="checkbox" onChange={handleChange} />
        </div>
    );
}