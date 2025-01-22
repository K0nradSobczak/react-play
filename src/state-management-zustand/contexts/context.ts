
export interface reduced <Action, Result> {
  dispatch: React.Dispatch<Action>;
  value: Result;
}

export class CreateReduce <Action, Result>{
  constructor(public dispatch: React.Dispatch<Action>, public value: Result) {};
}
