import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";



const Routs = createBrowserRouter([
  { path: '/',
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <HomePage/>},
      {path: 'users/', element: <UserListPage/>, children: [
        {path: ':id', element: <UserDetailPage/>},
      ]},
      {path: 'form', element: <ContactPage/>}
    ]
  }

])

export default Routs;