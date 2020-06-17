import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import {Link} from 'react-router-dom';

import './header.scss';

const useStyles = makeStyles((theme: Theme) => createStyles(
    {
        root: {
            flexGrow: 1,
            marginBottom: 30
        },
        tabs: {
            margin: 'auto'
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            width: 200
        },
        link: {
            textDecoration: 'none',
            color: 'white',
        },
        button: {
            marginLeft: 'auto'
        }
    }),
);

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar className={classes.root} position="sticky">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Toolbar className={classes.tabs}>
                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.link} to="/ongoings">Ongoings</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.link} to="/upload">Uploading titles</Link>
                    </Typography>
                </Toolbar>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
}
