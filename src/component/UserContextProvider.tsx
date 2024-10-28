import { createContext, ReactNode, useEffect, useState } from "react";

export interface User {
    name: string;
    email: string;
    age: number;
    isMarried: boolean; 
    country: Countries;
}

export enum Countries {
    BRAZIL = "Brazil",
    GERMANY = "Germany",
    NIGERIA = "Nigeria"
}

interface UserContextType {
    users: User[] | null;
    addUser: (user: User) => void;
    updateUser: (id: string) => void;
    deleteUser: (id: string) => void;
}

const contextInitialValues = {
    users: null,
    addUser: () => null,
    updateUser: () => null,
    deleteUser: () => null
}
export const UserContext = createContext<UserContextType>(contextInitialValues);

interface Props {
    children: ReactNode;
}
export const UserProvider = (props: Props) => {
    const [users, setUsers] = useState<User[] | null>(null);
    const addUser = (user: User) => null
    const updateUser = (id: string) => null
    const deleteUser = (id: string) => null

    useEffect(() => {
        setUsers([{ name: "lvis", email: "e@e.com", age: 39, isMarried: false, country: Countries.BRAZIL }]);
    }, [])

    return <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}> {props.children} </UserContext.Provider>
}