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
    <div className="w-[100%] h-[80vh] flex justify-center m-auto">
      <form onSubmit={handleSubmit} className="flex flex-col p-[10px] font-medium rounded-3xl items-center w-[500px] h-[400px]  m-auto bg-[#210471] border-2 border-[#6121ff]">
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
          placeholder="Descripcion"
          className="w-[450px] h-[50px] my-[20px] bg-transparent text-[#d5d0ff] border-2 border-[#6121ff] rounded-full"
        />
        <input
          type="date"
          name="date"
          value={data.date}
          onChange={handleChange}
          placeholder="Dia"
          className="w-[450px] h-[50px] my-[20px] bg-transparent text-[#d5d0ff] border-2 border-[#6121ff] rounded-full"
        />
        <input
          type="time"
          name="time"
          value={data.time}
          onChange={handleChange}
          placeholder="Horario"
          className=" w-[450px] h-[50px] my-[20px] bg-transparent text-[#d5d0ff] border-2 border-[#6121ff] rounded-full"
        />
        <button className="w-[400px] h-[50px] my-[20px] font-bold bg-transparent text-[#d5d0ff] border-2 border-[#6121ff] rounded-full" type="submit">CREAR</button>
      </form>
    </div>
    </>
  );
}
