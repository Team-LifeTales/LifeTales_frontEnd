import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./page/HomePage";
import UserPage from "./page/UserPage";
import CreatePage from "./page/CreatePage";
import UpdatePage from "./page/UpdatePage";
import SearchPage from "./page/SearchPage";
import ChatRoomPage from "./page/ChatRoomPage";
import LoginPage from "./page/LoginPage";
import SignUpPage from "./page/SignUpPage";
import FamilyPage from "./page/FamilyPage";
import LeftBar from "./component/leftBar/LeftBar";
import PrivateRouter from "./util/PrivateRouter";
const App = () => {
  const router = createBrowserRouter([
    {
      element: (
        <>
          <LeftBar />
          <PrivateRouter />
        </>
      ),
      children: [
        {
          path: "/Home",
          element: <HomePage />,
        },
        {
          path: "/User",
          element: <UserPage />,
        },
        {
          path: "/Family",
          element: <FamilyPage />,
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
      ],
    },
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/SignUp",
      element: <SignUpPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
