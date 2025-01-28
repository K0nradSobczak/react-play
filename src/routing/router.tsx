import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";



const Routs = createBrowserRouter([
  { path: '/',
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <HomePage/>},
      { path: '/login', element: <LoginPage/>},
      {path: 'form', element: <ContactPage/>}
    ]
  },
  {
    element: <PrivateRoutes />,
    children: [
      {path: 'users/', element: <UserListPage/>, children: [
        {path: ':id', element: <UserDetailPage/>},
      ]}
    ]
  }
])

export default Routs;