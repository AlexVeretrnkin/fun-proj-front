import React, {useEffect} from "react";

import {useParams} from "react-router-dom";
import {CardInfoModel} from "../models/card-info.model";

import {Button, Grid} from "@material-ui/core";

import './chosen-title.scss';

export const ChosenTitle = (
    {title, titleVideo, setTitle, downloadTitle, setVideo}:
        { title: CardInfoModel, titleVideo: string, setTitle: Function, downloadTitle: Function, setVideo: Function }
) => {
    let {id} = useParams();

    useEffect(() => {
        setTitle(id);
    }, [setTitle, id]);

    return (
        <div className={'container'}>
            <Grid container
                  justify="center"
                  alignItems="center">
                <Grid item xs={8}>
                    <h1>{title.title}</h1>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" color="primary"
                            onClick={() => downloadTitle(id)}
                    >
                        Download
                    </Button>
                </Grid>
            </Grid>

            <h2>{title.description}</h2>

            <Grid container
                  justify="center"
                  alignItems="center">
                <Grid item xs={12}>
                    <video src={titleVideo} className={'video'} controls>
                        <source src={titleVideo} type="video/mp4"/>
                    </video>
                </Grid>
            </Grid>

            <Grid container
                  justify="center"
                  alignItems="center"
                  spacing={1}
            >

                {
                    Array.from(Array(title.series).keys()).map((series: number) => (
                        <Grid item key={series}>
                            <Button variant="outlined"
                                    color="primary"
                                    onClick={() => setVideo(series + 1)}
                            >
                                {series + 1}
                            </Button>
                        </Grid>
                    ))
                }

            </Grid>
        </div>
    );
}
