import { useState } from "react";

export function Login({user}) {
  const [data, setData] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  console.log(password)
  const SignIn = async (evt) => {
    fetch("http://localhost:5000/api/user/register", {
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
  
 const handleSubmit = (evt) => {
   evt.preventDefault()
    fetch("http://localhost:5000/api/user/verify", {
      method: "post",
      headers:{"Content-Type": "application/x-www-form-urlencoded",},
      body: new URLSearchParams({email, password})
    }).then (res => 
      res.json()
    ).then(res => {
      user(res)
      console.log(res)
    }).catch(err => {
      console.error (err)
    })

  }

  return (
    <>
      <h2>Ingresar</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresar email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresar contraseña"
        />
        <button type="submit">
          Ingresar
        </button>
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
