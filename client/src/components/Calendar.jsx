
import { Shift } from "./Shift";

export function Calendar (){
    {
        <>
            <h2>Mes actual</h2>
            <h3>{day}</h3>
            {time.map((hora, id) => (
                <Shift key={id} time={time} description={description}/>
            ))}
        </>
    }
}