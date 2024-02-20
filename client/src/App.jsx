import { Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import { Login } from "./pages/Login";
import { Config } from "./pages/Config";
import { NavBar } from "./components/NavBar";

function App() {
 

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/config" element={<Config />}/>
      </Routes>
    </>
  );
}

export default App;
