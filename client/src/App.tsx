import { useRoutes } from "react-router-dom";
import "./App.css";
import useSEO from "./hooks/useSEO";
import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/Login";

function App() {
  useSEO({ title: "Propiedad 360", description: "Propiedad 360" });

  const AppRouter = () => {
    const routes = useRoutes([
      { path: "/", element: <h1>Home</h1> },
      { path: "/login", element: <Login /> },
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
