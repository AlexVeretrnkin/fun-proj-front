import {Card} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from "@material-ui/core/CardMedia";
import React from 'react';

import './ongoing-item.scss';

export default function OngoingItem() {
    return (
        <Card className='card'>
            <CardMedia
                className='card__media'
                image="https://static.anilibria.tv/upload/release/270x390/7439.jpg?1566259183"
            />
            <CardContent className='card__content'>
                <Typography className='card__text card__text_title' color="textPrimary" variant='h6' gutterBottom>
                    Мастера Меча Онлайн: Алисизация
                    <Typography className='card__text' component='p' color="textSecondary">
                        Серии 36
                    </Typography>
                </Typography>

                <Typography className='card__text card__text_description' color="textSecondary">
                    Underworld - мир, ранее недоступный человеческому пониманию. Мир, со своими законами - "Индексом
                    Запретов". За его соблюдением следит "Церковь Аксиомы" и рыцари единства, стать...
                </Typography>
            </CardContent>
        </Card>
    );
}
