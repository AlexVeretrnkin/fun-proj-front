import {Grid} from '@material-ui/core';
import React from 'react';

import OngoingItem from './ongoing-item/ongoing-item';

import './ongoing.scss';
import {CardInfoModel} from "../models/card-info.model";

/*const info: CardInfoModel[] = [
    {
        description:
            'Underworld - мир, ранее недоступный человеческому пониманию. Мир, со своими законами - "Индексом Запретов".' +
            ' За его соблюдением следит "Церковь Аксиомы" и рыцари единства, стать...',
        imgUrl: 'https://static.anilibria.tv/upload/release/270x390/7439.jpg?1566259183',
        series: 36,
        title: 'Мастера Меча Онлайн: Алисизация'
    },
    {
        description:
            'Underworld - мир, ранее недоступный человеческому пониманию. Мир, со своими законами - "Индексом Запретов".' +
            ' За его соблюдением следит "Церковь Аксиомы" и рыцари единства, стать...',
        imgUrl: 'https://static.anilibria.tv/upload/release/270x390/7439.jpg?1566259183',
        series: 36,
        title: 'Мастера Меча Онлайн: Алисизация'
    },
    {
        description:
            'Underworld - мир, ранее недоступный человеческому пониманию. Мир, со своими законами - "Индексом Запретов".' +
            ' За его соблюдением следит "Церковь Аксиомы" и рыцари единства, стать...',
        imgUrl: 'https://static.anilibria.tv/upload/release/270x390/7439.jpg?1566259183',
        series: 36,
        title: 'Мастера Меча Онлайн: Алисизация'
    },
    {
        description:
            'Underworld - мир, ранее недоступный человеческому пониманию.',
        imgUrl: 'https://static.anilibria.tv/upload/release/270x390/7439.jpg?1566259183',
        series: 36,
        title: 'Мастера Меча Онлайн: Алисизация'
    }
];*/

// @ts-ignore
const Ongoing = ({ongoings}: CardInfoModel[]) => (
    <div className="root">
        <Grid className="container" container justify='center'>
            {ongoings.map((infoItem: CardInfoModel, index: number) =>
                <Grid key={index} item>
                    <div className='grid-item'>
                        <OngoingItem index={index} {...infoItem} />
                    </div>
                </Grid>
            )}
        </Grid>
    </div>
);


export default Ongoing;
