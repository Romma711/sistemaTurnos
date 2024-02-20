export function SideBar(prop){
    return(
        <>
            <ul className="h-full bg-slate-500 w-[150px]">
                {prop.isadmin ? <li><button> Reservar turno</button></li>: <li><button> Crear turno</button></li>}
                {prop.isadmin ? <li><button> Mis turnos</button></li>: <li><button> Ver turnos</button></li>}
            </ul>
        </>
    )
}