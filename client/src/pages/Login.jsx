import { useState } from "react";

export function Login({ user }) {
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
    fetch("http://localhost:5000/api/user/verify",{
      method: "post",
      headers:{
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({email, password}),
    })
    .then((res) => {
      return res.json()
    })
    .then(res =>{
      user(res)
    })

  }

  return (
    <>
      <h2>Ingresar</h2>
      <form className="grid justify-center w-[400px] h-[300px] p-6 rounded-3xl bg-[#210471] text-[#d5d0ff] border-2 border-[#6121ff]" onSubmit={handleSubmit}>
        <input
          className="w-[250px] h-[35px] p-2 my-[20px] bg-transparent text-[#d5d0ff] border-2 border-[#6121ff] rounded-full"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresar email"
        />
        <input
          className="w-[250px] h-[35px] p-2 bg-transparent text-[#d5d0ff] border-2 border-[#6121ff] rounded-full"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresar contraseña"
        />
        <button className="my-[10px] font-bold bg-transparent text-[#d5d0ff] border-2 border-[#6121ff] rounded-full" type="submit">
          Ingresar
        </button>
      </form>

      <h2>Registrarse</h2>
      <form className="grid justify-center w-[400px] h-[500px] p-6 rounded-3xl bg-[#210471] text-[#d5d0ff] border-2 border-[#6121ff]" onSubmit={SignIn}>
        <input
        className="w-[250px] h-[35px] p-2 my-[10px] bg-transparent text-[#d5d0ff] border-2 border-[#6121ff] rounded-full"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Ingresar nombre"
        />
        <input
        className="w-[250px] h-[35px] p-2 my-[10px] bg-transparent text-[#d5d0ff] border-2 border-[#6121ff] rounded-full"
          type="text"
          name="lastname"
          value={data.lastName}
          onChange={handleChange}
          placeholder="Ingresar apellido"
        />
        <input
        className="w-[250px] h-[35px] p-2 my-[10px] bg-transparent text-[#d5d0ff] border-2 border-[#6121ff] rounded-full"
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Ingresar email"
        />
        <input
        className="w-[250px] h-[35px] p-2 my-[10px] bg-transparent text-[#d5d0ff] border-2 border-[#6121ff] rounded-full"
          type="text"
          name="phoneNumber"
          value={data.phone}
          onChange={handleChange}
          placeholder="Ingresar numero de celular"
        />
        <input
        className="w-[250px] h-[35px] p-2 my-[10px] bg-transparent text-[#d5d0ff] border-2 border-[#6121ff] rounded-full"
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Ingresar contraseña"
        />

        <button className="my-[30px] w-[250px] h-[50px] font-bold bg-transparent text-[#d5d0ff] border-2 border-[#6121ff] rounded-full" type="submit">Ingresar</button>
      </form>
    </>
  );
}
