import { useAuth } from "../hooks/useAuth";
import { loginStatus } from "../reducers/login_reducer";

const LoginStatus = () => {
  const { value, dispatch } = useAuth();

  if (value)
    return (
      <>
        <div>
          <span className="mx-2">{value}</span>
          <a onClick={() => dispatch({ type: loginStatus.logout })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: loginStatus.login, email: "mosh.123" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
