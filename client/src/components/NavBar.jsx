import { Link } from "react-router-dom";

export function NavBar(prop){
    return(
        <nav className="flex justify-between text-center place-items-center w-full h-[70px] px-10 mx-auto text-xl text-[#e9e6ff]">
            <h2 className="text-2xl font-bold">Nails MPD</h2>
            <div className="flex w-[600px] p-[9px] m-[3px] justify-around rounded-full backdrop-brightness-75 border-2 border-[#7347ff] font-medium">
                {prop.isAdmin ? <button> Reservar turno</button>: <button> Crear turno</button>}
                {prop.isAdmin ? <button> Mis turnos</button>: <button> Ver turnos</button>}
            </div>
            <Link className="font-medium" to="/login">Login</Link>
        </nav>
    )
}