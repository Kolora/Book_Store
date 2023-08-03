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
  flexGrow: {
    flexGrow: 1,
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <Typography variant="h2">Reader's Digest</Typography>
          <Typography variant="h6" className={classes.flexGrow}>
            {/* An empty Typography element with flexGrow will push the h2 element to the right */}
          </Typography>
          <NavLink
            to="/"
            exact
            className={classes.navLink}
            activeClassName={classes.activeNavLink}
          >
            <Button color="inherit">Books</Button>
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
};

export default Layout;
