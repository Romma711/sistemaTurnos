export function getAppointment(query,data){
    fetch(query,{
        method: "post",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json)
    .then(res => {return res})
    .catch(err => {return err})
}