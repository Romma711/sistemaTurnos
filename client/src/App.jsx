import { Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import { Login } from "./pages/Login";
import { Config } from "./pages/Config";
import { NavBar } from "./components/NavBar";
import { useState } from "react";

function App() {
  const [data, setData] = useState('')


  const settingData = (data) =>{
    setData(data)
  }
  return (
    <>
      <NavBar methods={settingData}/>
      <Routes>
        <Route path="/" element={<Index data={data}/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/config" element={<Config />}/>
      </Routes>
    </>
  );
}

export default App;
