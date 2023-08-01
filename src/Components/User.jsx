import { NavLink } from "react-router-dom"
import { Button } from '@material-ui/core'
import { useState } from "react"

export const User =({name , age}) => {
    const [x,setX] = useState(5);
    return (
        <>
        <h1>Username : {name}</h1>
        <h1>Age : {age}</h1>
        <NavLink to={"/"} >Home </NavLink> |
        <NavLink to={"/profile"} > Profile</NavLink>
        <br />
        x= {x}
        <br />
        <Button variant="contained" color="primary" onClick={()=>setX(x+1)}>Increment x</Button>
        <Button variant="contained" color="secondary" onClick={()=>setX(x-1)}>Decrement x</Button>
        <br />
        
        </>
    )
}