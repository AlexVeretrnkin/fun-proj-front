import { connect } from 'react-redux'
import {Ongoing} from "../ongoing/ongoing";
import {getOngoings} from "../actions/ongoing.action";

import axios from "axios";
import {environment} from "../environments/environment";

let getOngoing = (state: any) => {
    return {
        ongoings: state.ongoings
    };
};


const mapDispatchToProps = (dispatch: Function) => {
    return {
        getOngoings: async () => {
            dispatch(getOngoings((await axios.get(`${environment.apiUrl}ongoings`)).data))
        }
    }
}

const ConnectedOngoings = connect(getOngoing, mapDispatchToProps)(Ongoing)

export default ConnectedOngoings;
