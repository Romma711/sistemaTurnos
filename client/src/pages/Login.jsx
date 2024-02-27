import { useEffect, useState } from "react";

export function Login() {
  const [data, setData] = useState("")
  

  const SignIn = async (evt) => {
    fetch("http://localhost:5000/api/user/", {
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
      <h2>Ingresar</h2>
      <form>
        <input type="text" placeholder="Ingresar email" />
        <input type="text" placeholder="Ingresar pass" />
        <button type="submit">Ingresar</button>
      </form>

      <h2>Registrarse</h2>
      <form onSubmit={SignIn}>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Ingresar nombre"
        />
        <input
          type="text"
          name="lastname"
          value={data.lastName}
          onChange={handleChange}
          placeholder="Ingresar apellido"
        />
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Ingresar email"
        />
        <input
          type="text"
          name="phoneNumber"
          value={data.phone}
          onChange={handleChange}
          placeholder="Ingresar numero de celular"
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Ingresar contraseña"
        />
        
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}
