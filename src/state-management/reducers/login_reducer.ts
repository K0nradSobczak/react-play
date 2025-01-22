interface LoginAction {
  type: loginStatus.login ;
  email: string
}
interface LogoutAction {
  type: loginStatus.logout;
}
type Action = LogoutAction | LoginAction


export const loginReducer = (state: string, action: Action) => {
  switch (action.type) {
    case loginStatus.login:
      return action.email;
    case loginStatus.logout:
      return '';
  default:
    return state
  }
}

export enum loginStatus {
  login = "LOGIN",
  logout = "LOGOUT",
}
