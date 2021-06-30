import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function Header() {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.offset} />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Store
          </Typography>
          <Box>
            <Button color="inherit" to="/about" exact component={NavLink}>About</Button>
            <Button color="inherit" to="/delivery" exact component={NavLink}>Delivery</Button>
            <Button color="inherit" to="/catalog" exact component={NavLink}>Catalog</Button>
            <Button color="inherit" to="/cart" exact component={NavLink}>Cart</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

Header.propTypes = {};
