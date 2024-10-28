import { Context, createContext, useContext } from "react";
import { User } from "./User";

export const DashboardContext = createContext<User | undefined>(undefined);

export function useUserContext() {
    const user = useContext(DashboardContext);

    if(user == undefined) {
        throw new Error("-> useUserContext must be used with a DashboardContext")
    }

    return user;
}