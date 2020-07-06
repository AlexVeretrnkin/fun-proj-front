import {CardInfoModel} from "../models/card-info.model";

export const getOngoings = (payload: CardInfoModel[] = []) => {
    console.log(payload);

    return {
        type: 'GET_ONGOINGS',
        payload: payload
    }
}
