import { Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import { Login } from "./pages/Login";
import { Config } from "./pages/Config";
import { NavBar } from "./components/NavBar";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState([])
  const [data, setData] = useState('')

  const settingLogin = (log) =>{
    setLogin(log)
  }

  const settingData = (data) =>{
    setData(data)
  }
  console.log(data)
  return (
    <>
      <NavBar methods={settingData}/>
      <Routes>
        <Route path="/" element={<Index logIn={settingLogin} data={data}/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/config" element={<Config />}/>
      </Routes>
    </>
  );
}

export default App;
