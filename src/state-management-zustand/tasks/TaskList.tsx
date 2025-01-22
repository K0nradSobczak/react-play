import { useTask } from "../hooks/useTask";
import { acctionType } from "./task_reducer";

const TaskList = () => {
  const { value, dispatch } = useTask();
  return (
    <>
      <button
        onClick={() =>
          dispatch({
            type: acctionType.add,
            entity: { id: Date.now(), title: "Task " + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {value.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() =>
                dispatch({ type: acctionType.delete, entityId: task.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
