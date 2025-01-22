interface Task {
  id: number;
  title: string;
}

interface addTask {
  type: acctionType.add;
  entity: Task;
}

interface deleteTask {
  type: acctionType.delete;
  entityId: number;
}
type Action = deleteTask | addTask;

export const reduceTask = (state: Task[], action: Action) => {
  switch (action.type) {
    case acctionType.add:
      return [action.entity, ...state];

    case acctionType.delete:
      return state.filter(entity => entity.id !== action.entityId)
  }
}

export enum acctionType {
  add = 'ADD',
  delete = 'DELETE'
}