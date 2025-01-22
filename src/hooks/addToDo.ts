import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CATCH_KEY_TODOS } from "../react-query/constatns";
import toDoService, { Todo } from "../services/todo_service";




interface AddPreviousContext {
  previousTodos: Todo[];
}
export const AddToDo = (onAdd: () => void) => {
  const client = useQueryClient();

  return useMutation<Todo, Error,Todo, AddPreviousContext>({
    mutationFn: toDoService.addEntity,
    onMutate: (newTodos: Todo) => {
      const previousData = client.getQueryData<Todo[]>(CATCH_KEY_TODOS) || [];
      client.setQueryData<Todo[]>(CATCH_KEY_TODOS, (todos = []) => [
        newTodos,
        ...todos,
      ]);
      onAdd();

      return { previousData };
    },
    onSuccess: (savedTodos: Todo, newTodo: Todo) => {
      client.setQueryData<Todo[]>(CATCH_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodos : todo))
      );
    },
    onError: (error: Todo, newTodo: Todo, context: AddPreviousContext) => {
      if (!context) return;
      client.setQueryData<Todo[]>(CATCH_KEY_TODOS, context.previousTodos);
    },
  });
};

export default AddToDo;
