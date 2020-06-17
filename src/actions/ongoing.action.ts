import {CardInfoModel} from "../models/card-info.model";

export const getOngoings = (payload: CardInfoModel[] = []) => ({
    type: 'GET_ONGOINGS',
    payload: payload
})
