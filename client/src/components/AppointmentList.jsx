import { useEffect, useState } from "react";
import { Appointment } from "./Appointment";

export function AppointmentList(){
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/appointment/')
      .then(async (res) => await res.json())
      .then((res) => setData(res))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return(
    <Appointment appointment={data}/>
  )
}