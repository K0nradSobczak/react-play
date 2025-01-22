import { useRef } from "react";
import AddToDo from "../hooks/addToDo";

const TodoForm = () => {
  const addToDo = AddToDo(() => {
    if (ref.current?.value) ref.current.value = "";
  });
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addToDo.error && (
        <div className="alert alert-danger">{addToDo.error?.message}</div>
      )}
      <form className="row mb-3">
        <div className="col">
          <input
            ref={ref}
            type="text"
            title="someInput"
            className="form-control"
          />
        </div>
        <div className="col">
          <button
            className="btn btn-primary"
            disabled={addToDo.isLoading}
            onClick={(event) => {
              event?.preventDefault();
              if (ref.current?.value && ref.current)
                addToDo.mutate({
                  id: 0,
                  title: ref.current?.value,
                  userId: 1,
                  completed: false,
                });
            }}
          >
            {addToDo.isLoading ? "Adding...." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
