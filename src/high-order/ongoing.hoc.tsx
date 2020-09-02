import { connect } from 'react-redux'
import {Ongoing} from "../ongoing/ongoing";
import {getOngoings} from "../actions/ongoing.action";

import axios from "axios";

let getOngoing = (state: any) => {
    return {
        ongoings: state.ongoings
    };
};


const mapDispatchToProps = (dispatch: Function) => {
    return {
        getOngoings: async () => {
            dispatch(getOngoings((await axios.get('http://192.168.0.50:3000/ongoings')).data))
        }
    }
}

const ConnectedOngoings = connect(getOngoing, mapDispatchToProps)(Ongoing)

export default ConnectedOngoings;
