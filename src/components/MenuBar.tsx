import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function MenuBar() {
  const classes = useStyles();
  const handleSubmit = (event:any) => {
    event.preventDefault();
    localStorage.removeItem('session_id')
    document.location.href = "http://localhost:3000/";
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Single Pages Application
          </Typography>
          <form onSubmit={handleSubmit}>
            <Button type="submit" color="inherit">Sign Out</Button>
          </form>
        </Toolbar>
      </AppBar>
    </div>
  );
}