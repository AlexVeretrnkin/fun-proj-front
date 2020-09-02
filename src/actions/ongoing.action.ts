import {CardInfoModel} from "../models/card-info.model";

export const getOngoings = (payload: CardInfoModel[] = []) => {
    return {
        type: 'GET_ONGOINGS',
        payload: payload
    }
}
