import { useEffect } from "react";

function App() {
  useEffect(
    fetch('http://localhost:5000/api/shifts/all')
    .then(res => res.json())
    .then(res => console.log(res))
    .catch( err => console.error(err)), 
    [])

  return (
    <>
      
    </>
  );
}

export default App;
