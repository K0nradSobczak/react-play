import React from "react";
import { Action, Task } from "./task_reducer";
import { CreateReduce, reduced } from "../contexts/context";

type TaskContextProps2 = reduced<Action,Task[]>;

export class TaskReducing extends CreateReduce<Action, Task[]> {}

export const TaskContext = React.createContext<TaskContextProps2>({} as TaskContextProps2)