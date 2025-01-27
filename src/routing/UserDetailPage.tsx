import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const param = useParams(); // it give as param from link
  const [ searchParams, setSearchParams] = useSearchParams(); // it let use get and set link params
  // using for example ?name=Alice&age=25
  const location = useLocation(); // it returns object which tell us everything about current rount

  return <p>User {param.id}</p>;
};

export default UserDetailPage;
