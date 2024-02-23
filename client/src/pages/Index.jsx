import { useEffect, useState } from "react";
import { SideBar } from "../components/SideBar";
import { Shift } from "../components/Shift";
import { Create } from "../components/Create";

export function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/shifts/all', )
      .then(async (res) => await res.json())
      .then((res) => setData(res))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <SideBar />
      <Create />
      {data.map((shift) => (
            <Shift 
            key={shift.id}
            time={shift.time} 
            title={shift.title} 
            date={shift.date} />)

          )
         }
    </>
  );
}
