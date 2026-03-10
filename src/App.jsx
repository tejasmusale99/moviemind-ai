import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import SignIn from "./components/SignIn";

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
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
