import React from 'react';

import {Card} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from "@material-ui/core/CardMedia";

import './ongoing-item.scss';

import {CardInfoModel} from "../../models/card-info.model";

const animationDelayCoefficient: number = 0.1;

export default function OngoingItem(props: CardInfoModel & {index: number}) {
    return (
        <Card className='card' style={{animationDelay: (props.index * animationDelayCoefficient).toString() + 's'}}>
            <CardMedia
                className='card__media'
                image={props.imgUrl}
                component='img'
            />
            <CardContent className='card__content'>
                <Typography className='card__text card__text_title' color="textPrimary" variant='h6' gutterBottom>
                    {props.title}
                    <Typography className='card__text' component='p' color="textSecondary">
                        Серии {props.series}
                    </Typography>
                </Typography>

                <Typography className='card__text card__text_description' color="textSecondary">
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    );
}
