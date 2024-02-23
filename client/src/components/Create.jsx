import { useState } from "react";

export function Create() {
  const [data, setData] = useState({
    title: "",
    date: "",
    time: "",
  });

  const handleSubmit = async (evt) => {
    fetch("http://localhost:5000/api/appointment", {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data),
    }).then((res) => console.log(res));
    console.log(data);
    evt.preventDefault();
  };

  function handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;

    const newData = {
      ...data,
      [name]: value,
    };

    setData(newData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
          placeholder="Descripcion"
        />
        <input
          type="date"
          name="date"
          value={data.date}
          onChange={handleChange}
          placeholder="Dia"
        />
        <input
          type="time"
          name="time"
          value={data.time}
          onChange={handleChange}
          placeholder="Horario"
        />
        <button type="submit">crear</button>
      </form>
    </>
  );
}
