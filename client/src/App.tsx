import { useRoutes } from "react-router-dom";
import "./App.css";
import useSEO from "./hooks/useSEO";
import NavBar from "./components/NavBar/NavBar";

function App() {
  useSEO({ title: "Propiedad 360", description: "Propiedad 360" });

  const AppRouter = () => {
    const routes = useRoutes([
      { path: "/", element: <h1>Home</h1> },
      { path: "/about", element: <h1>About</h1> },
      { path: "*", element: <h1>Not Found</h1> },
    ]);

    return routes;
  };

  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
}

export default App;
