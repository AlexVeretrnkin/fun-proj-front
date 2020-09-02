import React from 'react';
import {Video} from "../video/video";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    video: {
        width: '80%',
        margin: "auto"
    }
});

export default function Upload() {
    const classes = useStyles();

    return (
        <div>
            <h1>Upload works !</h1>

            <div className={classes.video}>
                <Video/>
            </div>
        </div>
    );
}
