import {Grid} from '@material-ui/core';
import React from 'react';

import OngoingItem from './ongoing-item/ongoing-item';

import './ongoing.scss';
import {CardInfoModel} from "../models/card-info.model";
import {connect} from "react-redux";

const Ongoing = ({ongoings}: { ongoings: CardInfoModel[] }) => (
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

let getOngoings = (state: any) => {
    return {
        ongoings: state.ongoings
    };
};

export default connect(getOngoings)(Ongoing)

