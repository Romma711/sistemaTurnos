import { useEffect, useState } from "react";
import { SideBar } from "../components/SideBar";
import { Appointment } from "../components/Appointment";
import { Create } from "../components/Create";

export function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/appointment/')
      .then(async (res) => await res.json())
      .then((res) => setData(res))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <SideBar />
      <Create />
      {console.log(data)}
      <Appointment appointment={data}/>
    </>
  );
}
