import { Link } from "react-router-dom";

export function NavBar({methods},prop){
    return(
        <nav className="flex justify-between text-center place-items-center w-full h-[70px] px-10 mx-auto my-[20px] text-xl text-[#e9e6ff]">
            <Link to="/" className="text-2xl font-bold w-[120px]">Nails MPD</Link>
            <div className="flex w-[600px] p-[9px] m-[3px] justify-around rounded-full bg-[#210471] border-2 border-[#6121ff] font-medium">
                {prop.isAdmin ? <button onClick={() => methods("reserve")}> Reservar turno</button>: <button  onClick={() => methods("create")}> Crear turno</button>}
                {prop.isAdmin ? <button onClick={() => methods("reserved")}> Mis turnos</button>: <button onClick={() => methods("list")}> Ver turnos</button>}
            </div>
            <Link className="font-medium w-[120px]" to="/login">Login</Link>
        </nav>
    )
}