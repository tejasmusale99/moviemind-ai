import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
