import React from "react";
import { UserAction } from "../reducers/login_reducer";
import { CreateReduce, reduced } from "./context";

type LogReducer = reduced<UserAction, string>

export class CreateUser extends CreateReduce<UserAction, string> {};

export const UserContext = React.createContext<LogReducer>({} as LogReducer)