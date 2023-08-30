import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./page/HomePage";
import UserPage from "./page/UserPage";
import CreatePage from "./page/CreatePage";
import UpdatePage from "./page/UpdatePage";
import SearchPage from "./page/SearchPage";
import ChatRoomPage from "./page/ChatRoomPage";
import LoginPage from "./page/LoginPage";
import SignUpPage from "./page/SignUpPage";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/SignUp",
      element: <SignUpPage />,
    },
    {
      path: "/User",
      element: <UserPage />,
    },
    {
      path: "/Create",
      element: <CreatePage />,
    },
    {
      path: "/Update",
      element: <UpdatePage />,
    },
    {
      path: "/Search",
      element: <SearchPage />,
    },
    {
      path: "/ChatRoom",
      element: <ChatRoomPage />,
    },
    {
      path: "/Home",
      element: <HomePage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
