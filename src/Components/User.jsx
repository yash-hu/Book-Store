import { NavLink } from "react-router-dom"
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

export const User =({name , age}) => {
    return (
        <>
        <h1>Username : {name}</h1>
        <h1>Age : {age}</h1>
        <NavLink to={"/"} >Home </NavLink>
        <NavLink to={"/profile"} >Profile</NavLink>
        <br />
        <Button variant="contained" color="primary">contained</Button>
        <br />
        <Button variant="outlined" color="secondary">outlined</Button>
        <Button variant="text" color="inherit">text</Button>
        <TextField id="filled-basic" label="Filled" variant="filled" />
        </>
    )
}