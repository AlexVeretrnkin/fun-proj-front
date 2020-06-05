import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import './header.scss';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Grid className='header' container justify='center' alignItems='center'>
      <Grid container item justify='center' xs={3}>
        <Link to="/">Info</Link>
      </Grid>
      <Grid container item justify='center' xs={3}>
        <Link to="/about">Admin</Link>
      </Grid>
      <Grid container item justify='center' xs={3}>
        <Link to="/about">Uploads</Link>
      </Grid>
      <Grid container item justify='center' xs={3}>
        <Link to="/topics">Titles</Link>
      </Grid>
    </Grid>
  );
}
