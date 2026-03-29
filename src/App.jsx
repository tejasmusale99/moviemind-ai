import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import SignIn from "./components/SignIn";

function App() {
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/browse",
    element: <Body />, 
  },
]);
  return <RouterProvider router={appRouter} />;
}

export default App;
