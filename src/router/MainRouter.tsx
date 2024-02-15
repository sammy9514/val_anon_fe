import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { HomeScreen } from "../pages/HomeScreen";
import { Message } from "../pages/Message";
import { GetMessage } from "../pages/GetMessage";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
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
  // {
  //   path: "/",
  //   element: <Main />,
  // },
]);
