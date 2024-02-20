import { useEffect } from "react"

export function Create(){

    const [data, setData] = useState({
        description: '',
        day: '',
        time: ''
    })

    const handleInputChange = (event) =>{
        setData({
            ...data,
            [event.target]
        })
    }

    useEffect(() => {
        fetch('/api/shifts/',{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({})

        })
        
    })

    return(
        <>
            <form id="create-shifts" name="crate-shifts" action="">
                <input type="text" placeholder="Descripsion" />
                <input type="date" placeholder="Dia"/>
                <input type="time" placeholder="Horario"/>
            </form>
        </>
    )
}