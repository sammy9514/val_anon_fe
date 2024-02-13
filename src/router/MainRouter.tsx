import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { HomeScreen } from "../pages/HomeScreen";
import { Message } from "../pages/Message";
import { GetMessage } from "../pages/GetMessage";
import Main from "../pages/MainPro";
export const MainRouter = createBrowserRouter([
  {
    path: "/anon",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: `send-message/:name/:token`,
        element: <Message />,
      },
      {
        path: `get-message/:token`,
        element: <GetMessage />,
      },
    ],
  },
  {
    path: "/",
    element: <Main />,
  },
]);
