import {Grid} from '@material-ui/core';
import React, {useEffect} from 'react';

import OngoingItem from './ongoing-item/ongoing-item';

import './ongoing.scss';
import {CardInfoModel} from "../models/card-info.model";

export const Ongoing = (
        {ongoings, getOngoings}: { ongoings: CardInfoModel[], getOngoings: Function}
    ) => {
    useEffect(() => {
        getOngoings();
    }, [getOngoings]);

    return (
        <div className="root">
            <Grid className="container" container justify='center'>
                {ongoings.map((infoItem: CardInfoModel, index: number) =>
                    <Grid className='grid-item' key={index} item>
                        <OngoingItem index={index} {...infoItem} />
                    </Grid>
                )}
            </Grid>
        </div>
    );
}

