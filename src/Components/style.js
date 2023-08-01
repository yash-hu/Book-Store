import { makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles((theme) => ({
  wrapper: {
    color : "red",
    "& .click-btn": {
      backgroundColor: "black",
      padding : theme.spacing(2)
    },
  },
})); 
    