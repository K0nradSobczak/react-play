import { useAuth } from "../hooks/useAuth";
import { loginStatus } from "../reducers/login_reducer";
import { storeUser } from "./store";

const LoginStatus = () => {
  const {login, logout, email} = storeUser();

  if (email)
    return (
      <>
        <div>
          <span className="mx-2">{email}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => login('mosh.123')}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
