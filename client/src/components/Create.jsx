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
      <form onSubmit={handleSubmit} className="w-[500px] h-[400px] m-auto backdrop-brightness-75 border-2 border-[#7347ff]">
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
          placeholder="Descripcion"
          className="bg-transparent backdrop-brightness-75 border-2 border-[#7347ff]"
        />
        <input
          type="date"
          name="date"
          value={data.date}
          onChange={handleChange}
          placeholder="Dia"
          className="bg-transparent backdrop-brightness-75 border-2 border-[#7347ff]"
        />
        <input
          type="time"
          name="time"
          value={data.time}
          onChange={handleChange}
          placeholder="Horario"
          className="bg-transparent backdrop-brightness-75 border-2 border-[#7347ff]"
        />
        <button type="submit">crear</button>
      </form>
    </>
  );
}
