export function Appointment({appointment}){
    return(
        <>
            {appointment.map(appointment =>(
                <li key={appointment.id} >
                <h4>{appointment.title}</h4>
                <h4>{appointment.time}</h4>
                <h4>{appointment.date}</h4>
            </li>
            ))}
        </>
    )
}