import { Grid } from '@material-ui/core';
import React from 'react';

import OngoingItem from './ongoing-item/ongoing-item';

import './ongoing.scss';

export default function Ongoing() {
  return (
    <div className="root">
      <Grid className="container" container justify='center'>
        <Grid item>
          <div className='grid-item'>
            <OngoingItem />
          </div>
        </Grid>

        <Grid item>
          <div className='grid-item'>
            <OngoingItem />
          </div>
        </Grid>

        <Grid item>
          <div className='grid-item'>
            <OngoingItem />
          </div>
        </Grid>

        <Grid item>
          <div className='grid-item'>
            <OngoingItem />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
