import { useState } from "react";

export function Create() {
  const [data, setData] = useState({
    descripcion: "",
    dia: "",
    hora: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    fetch('http://localhost:5000/api/shifts/create', {
        method:'POST',
        body: JSON.stringify(data),
        headers:{
            "content-type" : "application/json",
        }
    })
    .then(res => res.json())
  }

  function handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;

    const newData = {
      ...data,
      [name]: value,
    };

    setData(newData)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="descripcion"
          value={data.descripcion}
          onChange={handleChange}
          placeholder="Descripcion"
        />
        <input 
          type="date" 
          name="dia" 
          value={data.dia}
          onChange={handleChange}
          placeholder="Dia" />
        <input
          type="time"
          name="hora"
          value={data.hora}
          onChange={handleChange}
          placeholder="Horario"
        />
        <button type="submit">crear</button>
      </form>
    </>
  );
}
