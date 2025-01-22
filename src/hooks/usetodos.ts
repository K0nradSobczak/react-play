import { useQuery } from "@tanstack/react-query";
import { CATCH_KEY_TODOS } from "../react-query/constatns";
import toDoService, { Todo } from "../services/todo_service";



const fetchTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CATCH_KEY_TODOS,
    queryFn: toDoService.getAll,
    staleTime: 3 * 100000
  });
};

export default fetchTodos;
