import { Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import { User } from "./pages/User";
import { Config } from "./pages/Config";
import { NavBar } from "./components/NavBar";
import { useState } from "react";

function App() {
  const [data, setData] = useState('')
  const [user, setUser] = useState('')
  
  const settingData = (data) =>{
    setData(data)
  }
  
  const settingUser = (user) =>{
    setUser(user)
  }
  console.log(user)
  return (
    <>
      <NavBar methods={settingData} isAdmin={user.isAdmin}/>
      <Routes>
        <Route path="/" element={<Index data={data}/>}/>
        <Route path="/login" element={<User user={settingUser} />}/>
        <Route path="/config" element={<Config />}/>
      </Routes>
    </>
  );
}

export default App;
