import FetchClient from "./http_service";

  export interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  }
  const toDoService = new FetchClient<Todo>("/todos");

  export default toDoService