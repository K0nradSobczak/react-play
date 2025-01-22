import { useContext } from "react";
import { TaskContext } from "../tasks/task_context";


export const useTask = () => useContext(TaskContext);