import { useState } from "react"
const Counter=()=>{
    const [counter,setCounter]=useState(0)
    return (
        <>
        <br></br>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        <h3>{counter}</h3>
        <button onClick={()=>{setCounter(counter-1)}}>-</button>
        </>
    )
}

export default Counter