import { useContext } from "react";
import { UserContext } from "../contexts/user_context";


export const useAuth = () =>  useContext(UserContext);