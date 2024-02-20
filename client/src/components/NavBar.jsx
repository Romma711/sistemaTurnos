import { Link } from "react-router-dom";

export function NavBar(){
    return(
        <nav className="w-full h-[70px] bg-slate-600">
            <h2>Bienvenido a Nails MPD</h2>

            <Link to="/login">Login</Link>
        </nav>
    )
}