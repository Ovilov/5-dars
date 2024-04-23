import Title from "./components/Title";
import TodoList from "./components/TodoList";
import { useFetch } from "./hooks/useFetch";
//
//

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Create from "./pages/Create";
import MainLayout from "./layouts/MainLayout";

function App() {
  const {
    data: todos,
    error,
    isPanding,
  } = useFetch("https://jsonplaceholder.typicode.com/todos");

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/create",
          element: <Create />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
