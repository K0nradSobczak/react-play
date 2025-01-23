import { useContext } from 'react';
import LoginStatus from '../user/LoginStatus';
import { TaskContext } from '../tasks/task_context';

const NavBar = () => {
  const { value } = useContext(TaskContext);
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{value.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
