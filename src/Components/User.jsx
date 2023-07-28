import { NavLink } from "react-router-dom"

export const User =({name , age}) => {
    return (
        <>
        <h1>Username : {name}</h1>
        <h1>Age : {age}</h1>
        <NavLink to={"/"} >Home</NavLink>
        </>
    )
}