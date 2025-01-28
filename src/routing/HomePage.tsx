import { Link, Navigate, useRouteError } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const HomePage = () => {
  // throw new Error("Somethings wrong...");
  const user = useAuth();
  if(!user.user) return <Navigate to={'/login'}/>
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Incidunt, mollitia!
      </p>
      <Link to={"/users"}>Users</Link>
    </>
  );
};

export default HomePage;
