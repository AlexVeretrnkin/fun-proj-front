import { connect } from 'react-redux'

import Ongoing from "../ongoing/ongoing";

let getOngoings = (state: any) => {
    return {
        ongoings: state.ongoings
    };
};

export default connect(getOngoings)(Ongoing)
