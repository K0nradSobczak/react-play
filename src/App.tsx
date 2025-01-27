import { RouterProvider } from 'react-router-dom';
import Routs from './routing/router';
import Counter from './state-management-zustand/counter/Counter';
import LoginStatus from './state-management-zustand/user/LoginStatus';



function App() {
  return (
      <>
      <RouterProvider router={Routs}/>
      </>


  );
}

export default App;
