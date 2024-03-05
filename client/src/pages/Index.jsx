import { useEffect, useState } from "react";
import { Create } from "../components/Create";
import { AppointmentList } from "../components/AppointmentList";

//#3e0daf paleta de colores

export function Index(prop) {
  return (
    <>
    <div className={`${prop.data ==="create" ? '': 'hidden'}`}>
      <Create />
    </div>
    <div className={`${prop.data ==="list" ? '': 'hidden'}`}>
      <AppointmentList/>
    </div>
    </>
  );
}
