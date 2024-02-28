import { useEffect, useState } from "react";
import { Create } from "../components/Create";
import { AppointmentList } from "../components/AppointmentList";

//#3e0daf paleta de colores

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
      <Create />
      <AppointmentList/>
    </>
  );
}
