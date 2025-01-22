import React, { ReactNode, useReducer } from "react";
import { loginReducer } from "../reducers/login_reducer";
import { CreateUser, UserContext } from "../contexts/user_context";

interface Props {
  children: ReactNode;
}

function AuthProvider({children}:Props) {
  const [valueLogin, dispatchLogin] = useReducer(loginReducer, '');
    const logValue = new CreateUser(dispatchLogin, valueLogin);
  return (
    <UserContext.Provider value={logValue}>
      {children}
    </UserContext.Provider>
  )
}

export default AuthProvider;
