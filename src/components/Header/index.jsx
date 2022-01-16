import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import EmojiNatureSharpIcon from "@material-ui/icons/EmojiNatureSharp";
import { createMuiTheme } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#bbb2e9",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
  logo: {
    color: "#F3C301",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Link className={classes.logo} to="/">
            <EmojiNatureSharpIcon className={classes.menuButton} />
          </Link>
          <Typography variant="h6" className={classes.title}>
            Gardena
          </Typography>

          <NavLink className={classes.link} to="/todos">
            <Button color="inherit">Todos</Button>
          </NavLink>
          <NavLink className={classes.link} to="/album">
            <Button color="inherit">Album</Button>
          </NavLink>

          <Button color="inherit">REGISTER</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;
