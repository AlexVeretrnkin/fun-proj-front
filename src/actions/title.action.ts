import {CardInfoModel} from "../models/card-info.model";

export const getTitle = (payload: CardInfoModel) => {
    return {
        type: 'GET_TITLE',
        payload: payload
    }
}
