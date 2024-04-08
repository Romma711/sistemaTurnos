export function Login() {
  return (
    <>
      <form
        className="grid justify-center w-[400px] h-[300px] p-6 rounded-3xl bg-[#210471] text-[#d5d0ff] border-2 border-[#6121ff]"
        onSubmit={handleSubmit}
      >
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
        <button
          className="my-[10px] font-bold bg-transparent text-[#d5d0ff] border-2 border-[#6121ff] rounded-full"
          type="submit"
        >
          Ingresar
        </button>
      </form>
    </>
  );
}
