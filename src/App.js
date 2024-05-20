import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.tsx";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import AppRouter from "./routes/AppRouter.tsx";

function App() {
  return (
    <div className="app-container dashboard-container">
      <AppRouter />
    </div>
  );
}

export default App;
