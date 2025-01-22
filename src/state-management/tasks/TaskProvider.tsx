import { ReactNode, useReducer } from "react";
import { TaskContext, TaskReducing } from "./task_context";
import { reduceTask } from "./task_reducer";
interface Props {
  children: ReactNode;
}
function TaskProvider({ children }: Props) {
  const [valueTask, dispatchTask] = useReducer(reduceTask, []);
  const taskValue = new TaskReducing(dispatchTask, valueTask);

  return (
    <TaskContext.Provider value={taskValue}>{children}</TaskContext.Provider>
  );
}

export default TaskProvider;
