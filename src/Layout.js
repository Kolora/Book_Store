import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: theme.spacing(3),
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    marginRight: theme.spacing(2),
  },
  activeNavLink: {
    fontWeight: "bold",
    borderBottom: `2px solid black`,
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <Typography variant="h6"></Typography>
          <NavLink
            to="/"
            exact
            className={classes.navLink}
            activeClassName={classes.activeNavLink}
          >
            <Button color="inherit">Inventory</Button>
          </NavLink>
          <NavLink
            to="/search"
            className={classes.navLink}
            activeClassName={classes.activeNavLink}
          >
            <Button color="inherit">Search</Button>
          </NavLink>
          <NavLink
            to="/cart"
            className={classes.navLink}
            activeClassName={classes.activeNavLink}
          >
            <Button color="inherit">Cart</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <div className="body-main">{children}</div>
    </div>
  );
  n;
};

export default Layout;
