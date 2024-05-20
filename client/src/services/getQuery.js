export function getAppointment(query){
    fetch(query)
    .then(res => res.json)
    .then(res => {return res})
    .catch(err => {return err})
}