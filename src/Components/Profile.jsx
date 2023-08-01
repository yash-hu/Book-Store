import { NavLink } from "react-router-dom"
import { Button , TextField } from "@material-ui/core"
import { styles } from "./style";

export const Profile =() => {
    const classes = styles();

    return (
      <>
        <h1 className={classes.wrapper}>This is your profile component 
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="click-btn"
        >
          Click me!
        </Button>
        </h1>
        <TextField id="filled-basic" label="Write something" variant="filled" />

        <NavLink to={"/"}>Home </NavLink> | 
        <NavLink to={"/user"}> User route</NavLink>
      </>
    );
}