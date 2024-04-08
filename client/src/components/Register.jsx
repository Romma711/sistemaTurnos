export function Register() {
  return (
    <>
      <form
        className="grid justify-center w-[400px] h-[500px] p-6 rounded-3xl bg-[#210471] text-[#d5d0ff] border-2 border-[#6121ff]"
        onSubmit={SignIn}
      >
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
        <button
          className="my-[30px] w-[250px] h-[50px] font-bold bg-transparent text-[#d5d0ff] border-2 border-[#6121ff] rounded-full"
          type="submit"
        >
          Ingresar
        </button>
      </form>
    </>
  );
}
